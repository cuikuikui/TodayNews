package com.igeekhome.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;

import com.igeekhome.dao.NewsDao;
import com.igeekhome.entity.News;

/**
 * Servlet implementation class MNewsList
 */
@WebServlet("/Newslistjson")
public class NewsListJson extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		// 适用于post方式
		request.setCharacterEncoding("gbk");
		response.setContentType("text/html;charset=utf-8");

		// 查询数据
		NewsDao NewsDao = new NewsDao();
		List<News> newss = NewsDao.getAllNewss();

		JSONObject jo = null;
		JSONArray ja = new JSONArray();
		for (News news : newss) {
			jo = new JSONObject(news);
			ja.put(jo);
		}

		// 将数据以json的形式返回
		PrintWriter out = response.getWriter();
		out.println(ja.toString());

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
