package data.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import data.dto.BoardDto;
import data.mapper.BoardMapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoardService implements BoardServiceInter {
	
	private BoardMapper bm;
	
	@Override
	public int getTotalCount() {
		return bm.getTotalCount();
	}
	
	@Override
	public void insertBoard(BoardDto dto) {
		bm.insertBoard(dto);
	}

	@Override
	public List<BoardDto> getPagingList(int start, int perpage) {
		Map<String, Integer> map = new HashMap<>();
		map.put("start", start);
		map.put("perpage", perpage);
		return bm.getPagingList(map);
	}

	@Override
	public void updateReadcount(int num) {
		bm.updateReadcount(num);
	}

	@Override
	public BoardDto detailPage(int num) {
		return bm.detailPage(num);
	}

	@Override
	public void deleteBoard(int num) {
		bm.deleteBoard(num);
	}

}
