<template>
  <div class="tinymce">
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <tinymce-editor :init="tinymceInit"></tinymce-editor>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  components: {
    'tinymce-editor': Editor
  },
  data() {
    return {
      tinymceInit: {
        language: 'zh_CN',
        height: 420,
        plugins: 'link lists image code table wordcount',
        toolbar: 'bold italic underline strikethrough | fontsizeselect | forecolor backcolor | alignleft aligncenter alignright alignjustify|bullist numlist | outdent indent blockquote | undo redo | link unlink image code | removeformat',
        branding: false,
        images_upload_handler:(blobInfo, success)=> {
          success('data:image/jpeg;base64,' + blobInfo.base64())
        }
      },
      tinymceData: {}
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.tinymce {
  padding: 10px;
}
</style>