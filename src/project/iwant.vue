<template>
    <div id="index">
        <div class="bigbox">
            <!-- 左侧导航条 -->
            <div class="leftbox"></div>
            <!-- 右侧 -->
            <div class="rightbox">
                <div class="colindex">
                    <b class="yxb">德克士加盟意向申请表</b>
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item prop="name">
                        <el-input v-model="ruleForm.name" placeholder="四字中文以内"></el-input>
                    </el-form-item>
                    <el-form-item prop="region">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <el-option value="shanghai"></el-option>
                        <el-option value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间" required>
                        <el-col :span="11">
                        <el-form-item prop="date1">
                            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                        <el-form-item prop="date2">
                            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
                        </el-form-item>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送" prop="delivery">
                        <el-switch v-model="ruleForm.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质" prop="type">
                        <el-checkbox-group v-model="ruleForm.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源" prop="resource">
                        <el-radio-group v-model="ruleForm.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式" prop="desc">
                        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style>
*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
}
html,body{
    height: 100%;
}
body{
    font-size: 14px;
    font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
a{
    color: #7f7f7f;
}
#index{
    height: 100%;
}
.bigbox{
    width: 100%;
    height: 100%;
    /* overflow: hidden; */
}
.rightbox{
    height: 100%;
    margin-left: 20%;
    background: url('http://www.dicos.com.cn/Public/static/images/probg.jpg') repeat;
}
.rightbox img{
    display: inline-block;
    max-width: 100%;
}
.yxb{
    display: block;
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin-top: 70px;
    letter-spacing:7px;
    margin-bottom: 50px;
}
.el-input{
    width: 350px;
    height: 55px;
}
.el-input__inner{
    border-radius: 20px !important;
    border: none;
    height: 55px;
    font-size: 17px;
    padding-left: 60px;
}
</style>

