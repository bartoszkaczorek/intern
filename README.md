# Intern-fixed

## About

This is a fork of intern with few features added/fixed:
- Added projectRoot option to Cobertura reporter 
- Added winston logs to intern Proxy server
- Separated proxy settings for intern Proxy server & dig dug tunnel

# projectRoot option for Cobertura reporter

TODO

# Winston logs

{
 internServerOptions: {
  "logger" : {
   "console" : true,
   "filename" : "your-file.log"
   }
 }
}

# Separated proxy settings for intern Proxy Server

You can configure intern Proxy server options using:

{
 internServerOptions: {
  proxy: "yourProxy"
 }
}

## License

Intern is a Dojo Foundation project offered under the [New BSD](LICENSE) license.

© [SitePen, Inc.](http://sitepen.com) and its [contributors](https://github.com/theintern/intern/graphs/contributors)
