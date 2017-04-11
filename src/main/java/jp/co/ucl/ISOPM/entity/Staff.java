package jp.co.ucl.ISOPM.entity;

import java.util.PrimitiveIterator;

import javax.management.loading.PrivateClassLoader;

import java.util.Date;

/**
 * Staff Entity
 * Created by ZhenYang on 2017/02/19.
 */
public class Staff extends BaseEntity {

    private Integer staffId;

    private String staffName;

    private String sex;

    private Date birthday;
    
    private String staffTel;
    
    private String nationality;
     
    private String staffMail;
    
    private String staffAddress;
   
	private String company;
    
    private String department;
    
    private Date entryTime;
    
    private String profileUrl;
    
    private String avatarUrl;

	
	public Integer getStaffId() {
		return staffId;
	}

	public void setStaffId(Integer staffId) {
		this.staffId = staffId;
	}

	public String getStaffName() {
		return staffName;
	}

	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getStaffTel() {
		return staffTel;
	}

	public void setStaffTel(String staffTel) {
		this.staffTel = staffTel;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getStaffMail() {
		return staffMail;
	}

	public void setStaffMail(String staffMail) {
		this.staffMail = staffMail;
	}
	
	public String getStaffAddress() {
	    return staffAddress;
	}

	public void setStaffAddress(String staffAddress) {
		this.staffAddress = staffAddress;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public Date getEntryTime() {
		return entryTime;
	}

	public void setEntryTime(Date entryTime) {
		this.entryTime = entryTime;
	}

	public String getProfileUrl() {
		return profileUrl;
	}

	public void setProfileUrl(String profileUrl) {
		this.profileUrl = profileUrl;
	}

	public String getAvatarUrl() {
		return avatarUrl;
	}

	public void setAvatarUrl(String avatarUrl) {
		this.avatarUrl = avatarUrl;
	}
    public Staff() {
		
	}

	public Staff(Integer staffId, String staffName,  String sex, Date birthday, String staffTel, String nationality,
			String staffMail, String staffAddress,  String company, String department, String profileUrl,String avatarUrl) {
		super();
		this.staffId = staffId;
		this.staffName = staffName;
		this.sex = sex;
		this.birthday = birthday;
		this.staffTel = staffTel;
		this.nationality =nationality;
		this.staffMail = staffMail;
		this.staffAddress = staffAddress;
		this.company = company;
		this.department = department;
		this.profileUrl = profileUrl;
		this.avatarUrl = avatarUrl;
	}  
	

}
