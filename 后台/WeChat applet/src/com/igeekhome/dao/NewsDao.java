package com.igeekhome.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.igeekhome.entity.News;
import com.igeekhome.utils.JdbcUtils;

public class NewsDao {
	/**
	 * 查询所有News数据
	 * 
	 * @return
	 */
	public List<News> getAllNewss() {
		Connection conn = null;
		Statement stat = null;
		ResultSet rs = null;

		// 封装一个员工的数据
		News news = null;
		// 存放所有员工数据的集合
		List<News> newss = new ArrayList<News>();

		try {
			// 获取连接
			conn = JdbcUtils.getConnection();

			// 3.创建执行语句
			stat = conn.createStatement();

			// 4.执行语句
			String sql = "select * from news";
			rs = stat.executeQuery(sql);

			// 遍历结果集将数据存在list中
			while (rs.next()) {
				news = new News();

				news.setId(rs.getInt("id"));

				news.setGrade(rs.getInt("grade"));
				news.setTitle(rs.getString("title"));
				news.setAuthor(rs.getString("author"));
				news.setTime(rs.getString("time"));
				news.setCover(rs.getString("cover"));

				news.setContent1(rs.getString("content1"));
				news.setContent2(rs.getString("content2"));
				news.setContent3(rs.getString("content3"));
				news.setContent4(rs.getString("content4"));
				news.setPicurl1(rs.getString("picurl1"));
				news.setPicurl2(rs.getString("picurl2"));
				news.setPicurl3(rs.getString("picurl3"));
				news.setContId(rs.getInt("contId"));

				newss.add(news);
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// 释放资源
			JdbcUtils.free(conn, stat, rs);
		}
		return newss;
	}
}
