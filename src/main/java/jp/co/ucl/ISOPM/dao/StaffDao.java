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
            @Result(property = "pKey", column = "pkey", id = true),
            @Result(property = "staffName", column = "staff_name"),
            @Result(property = "corpName", column = "corp_name"),
            @Result(property = "createdAt", column = "created_at"),
            @Result(property = "updatedAt", column = "updated_at"),
            @Result(property = "deletedAt", column = "deleted_at")
    })
    @Select("SELECT pkey, staff_name, corp_name, work_no, created_at, updated_at, deleted_at FROM t_staff")
    List<Staff> listAll();


    @ResultMap("staffResult")
    @Select("SELECT pkey, staff_name, corp_name, work_no, created_at, updated_at, deleted_at FROM t_staff WHERE pkey=#{id}")
    Staff getStaffById(@Param("id") int id);
}
