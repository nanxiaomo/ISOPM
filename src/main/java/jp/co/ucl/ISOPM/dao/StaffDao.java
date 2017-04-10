package jp.co.ucl.ISOPM.dao;

import jp.co.ucl.ISOPM.entity.Staff;
import org.apache.ibatis.annotations.*;

import java.util.List;

/**
 * Created by ZhenYang on 2017/02/19.
 */
@Mapper
public interface StaffDao {
    @Results(id = "staffResult", value = {
            @Result(property = "staffId", column = "staff_id", id = true),
            @Result(property = "staffName", column = "staff_name"),
            @Result(property = "sex", column = "sex"),
            @Result(property = "birthday", column = "birthday"),
            @Result(property = "staffTel", column = "staff_tel"),
            @Result(property = "nationality", column = "nationality"),
            @Result(property = "staffMail", column = "staff_mail"),
            @Result(property = "staffAddress", column = "staff_address"),
            @Result(property = "company", column = "company"),
            @Result(property = "department", column = "department"),
            @Result(property = "entryTime", column = "entry_time"),
            @Result(property = "profileUrl", column = "profile_url"),
            @Result(property = "avatarUrl", column = "avatar_url"),
            @Result(property = "createdAt", column = "created_at"),
            @Result(property = "updatedAt", column = "updated_at"),
            @Result(property = "deletedAt", column = "deleted_at"),
            
    })
    @Select("SELECT * FROM gad_personal_information")
    List<Staff> listAll();
    @ResultMap("staffResult")
    
    @Select("SELECT staff_id, staff_name, staff_tel, staff_mail, company from gad_personal_information")
    List<Staff> ListPortion();
    @Results(
        {
            @Result(property = "staffId", column = "staff_id", id = true),
            @Result(property = "staffName", column = "staff_name"),
            @Result(property = "staffTel", column = "staff_tel"),
            @Result(property = "staffMail", column = "staff_mail"),
            @Result(property = "company", column = "company"),
            @Result(property = "createdAt", column = "created_at"),
            @Result(property = "updatedAt", column = "updated_at"),
            @Result(property = "deletedAt", column = "deleted_at"),
            
    })
    
    
    @Select("SELECT * FROM gad_personal_information WHERE staff_id=#{id}")
    Staff getStaffById(@Param("id") int id);
    
    @Insert("Insert INTO gad_personal_information(school,department,classRoom,course,request,plan,test,urls,email,status) VALUES(#{course.school},#{course.department},#{course.classRoom},#{course.course},#{course.request},#{course.plan},#{course.test},#{course.urls},#{course.email},#{course.status})")
	@Options(useGeneratedKeys = true, keyProperty = "course.id")
	int addCourse(@Param("course") Course course);
}
