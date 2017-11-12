#JS for Software UCAS

#JavaScript&Jquery 练习、修改

**UTF-8中文字符的注释换行问题: GitforWindows+dos文件自动处理=====dos2unix+关闭git config --global core.autocrlf false (统一字符编码格式很重要) **  

**CH_01_02 基础知识**  
关于html js之间的联系;JS五种输出方式;基本数据类型 字符串 数组 布尔值简单使用; 元素的id innerhtml(textContent) className属性
**CH_03 内置对象**  
关于JS window document RegExp等等 以及String的多种方法使用 以及IIFE立即调用函数的练习
**CH_04 循环**  
for while do while 以及section br标签
**CH_05 DOM、元素、属性**     
若干种获取DOM中元素并保存到NodeList中方法;元素Element的创建、删除、添加(insertbefore、appendchild等等);Attribute属性设置className等等  
**CH_06 EVENT**  
事件 click mouse submit 等等 也可以在root属性上监听  Jqury监听事件on  
**CH_07 Jqury**  
Jqury 页面ready后执行JS 获取元素$()更加方便 .each()遍历 事件监听.on()  
**CH_08 Ajax Json**  
  
  
  find $path -type f | xargs dos2unix   


错误根源:  windows下编辑unix文件 notepad打开编辑后 换行符仍然是LF   
	  但是(windows)git上传时自作聪明的帮你把所有文件格式先转换一次再上传   

即：   

当你在签出文件时，Git 试图将 UNIX 换行符（LF）替换为 Windows 的换行符（CRLF）；当你在提交文件时，它又试图将 CRLF 替换为 LF   

add 时候将文件LF => CRLF   commit push时候进行入库 CRLF => LF  

但是 包含中文字符的 UTF-8 文件，那么这个“换行符自动转换”功能 在提交(commmit push)时是不工作的  

所以:  
     

git for branch dev
