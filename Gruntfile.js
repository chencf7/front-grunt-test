module.exports=function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify:{
      options:{
        stripBanners:true,
        // 压缩生成注释内容
        banner:'/*! <%= pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build:{
        // src:'src/test.js',
        // 选择压缩js的源文件
        src: ['src/*.js'],
        // pkg.name, pkg.version为package.json文件的name，以及version属性
        dest:'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
      }
    },
    connect: {
      // connect默认设置选项
      options: {
        protocol: 'http',
        port: 9000,
        open: true,
        keepalive: true,  //重要，否则grunt执行完成后，服务器会自动关闭
        //备注：使用 keepalive 这个选项可以使得 grunt 在执行到 connect 的时候，不会退出这个任务，保持服务器的持续执行，可以一直访问这个服务器了
        //需要注意的是，这个 grunt 任务会阻塞后继任务的执行，因此，你需要将这个任务排在最后一个任务
        livereload: 35729,  //声明给 watch 监听的端口
        hostname: '*' // Change this to '0.0.0.0' to access the server from outside
      },
      server: {
        // connect自定义服务器选项，将会覆盖默认option
        options: {
          port: 9001,
          //一个字符串，或者一个数组，或者一个对象，用来表示映射到网站虚拟根目录的目标。
          base: './'
        }
      },
      //配置多个服务器
      site: {
        options: {
          port: 9002,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask('default', ['uglify', 'connect:server']);
  grunt.registerTask('site', ['uglify', 'connect:site']);
}