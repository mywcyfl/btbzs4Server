friends_server
==============

server of friends

目录结构说明:
	./config/ 	为配置文件夹，其内存放服务端各种配置文件，如mysql配置文件等，服务器启动时将尝试从此文件夹中读取各类需要的配置
	./doc/ 		为文本文件夹，其内存放一些文本文件，如前后端通信API文档等，亦或是
	./logs/		为日志文件夹，服务端运行时生成的日志文件放在该文件夹下
	./scripts/	为脚本文件夹，其内存放一些服务端部署、运维等用到的脚本，如数据库初始化sql脚本，自动启动脚本等
	./src/		为源码文件夹，其内为服务端源码
		./src/bin/ 		为express生成的可执行目录，其中包含启动入口脚本www
		./src/lib/ 		为一些独立库（第三方模块）存放目录，这些模块并不在npm中
		./src/models/	为mvc结构中m层目录，也即存放一些数据结构的定义，如user.js
		./src/node_modules/ 为通过npm安装的第三方库目录
		./src/public/	为express生成的静态文件目录，该目录存放web页面所引用的一些js文件，这里我们没用到
		./src/routes/	为express生成的路由函数目录，该目录下存放一些路由处理函数
		./src/util/		为工具性、全局性文件存放目录，存放有前后端数据包错误码定义文件（code.js），token生成函数，utils文件等
		./src/views/	为express生成的存放界面文件的目录，这里我们没用到
