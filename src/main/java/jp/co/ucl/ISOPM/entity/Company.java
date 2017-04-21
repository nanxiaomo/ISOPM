package jp.co.ucl.ISOPM.entity;

import java.util.PrimitiveIterator;

import javax.management.loading.PrivateClassLoader;

import java.util.Date;

/**
 * Company Entity
 */
public class Company extends BaseEntity {

    private String company_id;

    private String company_name;
    
    private String company_tel;
     
    private String company_mail;
    
    private String company_address;
    
    private String sale_to_company_id;
    
    private String buy_from_company_id;

	public String getcompany_id() {
		return company_id;
	}

	public void setcompany_id(String company_id) {
		this.company_id = company_id;
	}

	public String getcompany_name() {
		return company_name;
	}

	public void setcompany_name(String company_name) {
		this.company_name = company_name;
	}

	public String getcompany_tel() {
		return company_tel;
	}

	public void setcompany_tel(String company_tel) {
		this.company_tel = company_tel;
	}

	public String getcompany_mail() {
		return company_mail;
	}

	public void setcompany_mail(String company_mail) {
		this.company_mail = company_mail;
	}
	
	public String getcompany_address() {
	    return company_address;
	}

	public void setcompany_address(String company_address) {
		this.company_address = company_address;
	}

	public String getbuy_from_company_id() {
		return buy_from_company_id;
	}

	public void setbuy_from_company_id(String buy_from_company_id) {
		this.buy_from_company_id = buy_from_company_id;
	}

	public String getsale_to_company_id() {
		return sale_to_company_id;
	}

	public void setsale_to_company_id(String sale_to_company_id) {
		this.sale_to_company_id = sale_to_company_id;
	}

	

}
