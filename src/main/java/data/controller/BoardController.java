package data.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import data.dto.BoardDto;
import data.service.BoardService;
import lombok.extern.slf4j.Slf4j;
import naver.cloud.NcpObjectStorageService;

@RestController
@CrossOrigin
@RequestMapping("/board")
@Slf4j
public class BoardController {
	
	@Autowired
	private NcpObjectStorageService storageService;
	
	// 버켓 이름 지정
	private String bucketName = "bit701-bucket-106";
	
	// 사진 업로드할 변수
	String photo;
	
	@Autowired
	private BoardService bs;
	
	@PostMapping("/upload")
	public String photoUpload(MultipartFile upload) {
		log.info("file -> {}",upload);
		if(photo != null) {
			// 이전 사진 삭제
			storageService.deleteFile(bucketName, "board", photo);
			photo = null;
		}
		
		photo = storageService.uploadFile(bucketName, "board", upload);
		
		return photo;
	}
	
	@PostMapping("/insert")
	public void insert(@RequestBody BoardDto dto) {
		System.out.println("insert >> " + dto  );
		dto.setPhoto(photo);
		
		bs.insertBoard(dto);
		
		photo = null;
	}
	
	@GetMapping("/detail")
	public BoardDto detailPage(int num) {
		System.out.println(num);
		// 조회수 먼저 증가
		bs.updateReadcount(num);
		
		return bs.detailPage(num);
	}
	
	@GetMapping("/list")
	public Map<String, Object> list(@RequestParam(defaultValue = "1") int currentPage) {
		System.out.println("list >> " + currentPage);
		
		//페이징처리
        int totalCount;		//총갯수
        int perPage = 5;	//한페이지당 출력할 글갯수
        int perBlock = 5;	//출력할 페이지갯수
        int startNum;		//db에서 가져올 시작번호
        int startPage;		//출력할 시작페이지
        int endPage;		//출력할 끝페이지
        int totalPage;		//총 페이지수
        int no;				//출력할 시작번호

        //총갯수
        totalCount = bs.getTotalCount();
        //총 페이지수
        totalPage = totalCount / perPage + (totalCount % perPage == 0 ? 0 : 1);
        //시작페이지
        startPage = (currentPage - 1) / perBlock * perBlock + 1;
        //끝페이지
        endPage = startPage + perBlock - 1;
        
        if(endPage > totalPage) {
        	endPage = totalPage;        	
        }

        //시작번호
        startNum = (currentPage - 1) * perPage;
        //각페이지당 출력할 번호
        no = totalCount-(currentPage - 1) * perPage;

        List<BoardDto> list = bs.getPagingList(startNum, perPage);

        //출력할 페이지번호들을 Vector에 담아서 보내기
        Vector<Integer> parr=new Vector<>();
        for(int i = startPage; i <= endPage; i++){
            parr.add(i);
        }

        //리액트로 필요한 변수들을 Map 에 담아서 보낸다
        Map<String, Object> smap = new HashMap<>();
        smap.put("totalCount", totalCount);
        smap.put("list", list);
        smap.put("parr", parr);
        smap.put("startPage", startPage);
        smap.put("endPage", endPage);
        smap.put("no", no);
        smap.put("totalPage", totalPage);

        return  smap;
	}
	
	@DeleteMapping("/delete")
	public void delete(int num) {
		System.out.println(num);
		// num에 해당하는 사진 스토리지에서 지우기
		String perPhoto = bs.detailPage(num).getPhoto();
		storageService.deleteFile(bucketName, "board", perPhoto);
		
		// db에서 데이터 삭제
		bs.deleteBoard(num);
	}
}