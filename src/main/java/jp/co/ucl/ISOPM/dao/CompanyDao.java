package jp.co.ucl.ISOPM.dao;

import jp.co.ucl.ISOPM.entity.Company;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface CompanyDao {
    @Results(id = "companyResult", value = {
            @Result(property = "company_id", column = "company_id", id = true),
            @Result(property = "company_name", column = "company_name"),
            @Result(property = "company_address", column = "company_address"),
            @Result(property = "company_tel", column = "company_tel"),
            @Result(property = "company_mail", column = "company_mail"),
            
    })
    @Select("SELECT * FROM bd_company_information")
    List<Company> listAll();
    @ResultMap("companyResult")
    /**    
 *   @Select("SELECT company_name, company_tel, company_mail from bd_company_information")
 */
    @Select("SELECT bd_buyer_company.buy_from_company_id, bd_seller_company.sale_to_company_id,"
    		+ " bd_company_information.company_name, company_tel"
    		+ " FROM bd_buyer_company, bd_seller_company, bd_company_information"
    		+ " WHERE bd_company_information.company_id=bd_buyer_company.company_id"
    		+ " AND bd_company_information.company_id=bd_seller_company.company_id"
    		+ " GROUP BY bd_company_information.company_id")
    List<Company> ListPortion();
    @Results(
        {
        	@Result(property = "company_name", column = "company_name"),
        	@Result(property = "company_tel", column = "company_tel"),
            
    })
    
    
    @Select("SELECT * FROM bd_company_information WHERE company_id=#{id}")
    Company getCompanyById(@Param("id") int id);
    
   
}
