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
	 * ��ѯ����News����
	 * 
	 * @return
	 */
	public List<News> getAllNewss() {
		Connection conn = null;
		Statement stat = null;
		ResultSet rs = null;

		// ��װһ��Ա��������
		News news = null;
		// �������Ա�����ݵļ���
		List<News> newss = new ArrayList<News>();

		try {
			// ��ȡ����
			conn = JdbcUtils.getConnection();

			// 3.����ִ�����
			stat = conn.createStatement();

			// 4.ִ�����
			String sql = "select * from news";
			rs = stat.executeQuery(sql);

			// ��������������ݴ���list��
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
			// �ͷ���Դ
			JdbcUtils.free(conn, stat, rs);
		}
		return newss;
	}
}
