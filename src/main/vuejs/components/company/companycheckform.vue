<template>
	<el-col :span="15">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item label="公司名称" prop="name">
		    <el-input v-model="ruleForm.name"></el-input>
		  </el-form-item>
		  <el-form-item label="买方公司编号" prop="buyerid">
		    <el-input v-model="ruleForm.buyerid"></el-input>
		  </el-form-item>
		  <el-form-item label="卖方公司编号" prop="sellerid">
		    <el-input v-model="ruleForm.sellererid"></el-input>
		  </el-form-item>
		  <el-form-item label="联系电话" prop="tel">
		    <el-input v-model="ruleForm.tel"></el-input>
		  </el-form-item>
		  <el-form-item label="邮箱地址" prop="email">
		    <el-input v-model="ruleForm.email"></el-input>
		  </el-form-item>
		  <el-form-item label="公司地址" prop="address">
		    <el-input type="textarea" v-model="ruleForm.address"></el-input>
		  </el-form-item>
		  </br></br>
		  <el-form-item>
		    <el-button type="success" @click="submitForm('ruleForm')">修改</el-button>
		    <el-button type="danger" @click="deleteForm('ruleForm')">删除</el-button>
		    <el-button type="info" @click="resetForm('ruleForm')">返回</el-button>
		  </el-form-item>
		</el-form>
	</el-col>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          buyerid: '',
          sellerid: '',
          tel: '',
          email: '',
          address: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入公司名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          tel: [
            { required: true, message: '请填写联系电话', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请填写邮箱', trigger: 'blur' }
          ],
          address: [
            { required: true, message: '请填写公司地址', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
      deleteForm(formName) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      }
    }
  }
</script>

<style type="text/css">
	.demo-ruleForm {
    padding-top: 35px;
    padding-left: 150px;
  }

</style>
