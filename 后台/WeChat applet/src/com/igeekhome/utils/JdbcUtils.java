package com.igeekhome.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class JdbcUtils {

	static String url = "jdbc:mysql://127.0.0.1:3306/test";
	static String user = "root";
	static String password = "123456";

	static {
		// 1.ע������(ֻ��ִ��һ��)
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	/**
	 * ��ȡ���ݿ����Ӷ���
	 * 
	 * @return
	 */
	public static Connection getConnection() {
		// 2.��������
		Connection conn = null;
		try {
			conn = DriverManager.getConnection(url, user, password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}

	/**
	 * �ͷ���Դ
	 * 
	 * @param conn
	 * @param stat
	 * @param rs
	 */
	public static void free(Connection conn, Statement stat, ResultSet rs) {
		// 5.�ͷ���Դ
		try {
			if (rs != null) {
				rs.close();
			}
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		} finally {
			try {
				if (stat != null) {
					stat.close();
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
				if (conn != null) {
					try {
						conn.close();
					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
			}
		}
	}

}
