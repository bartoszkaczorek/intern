# Intern-fixed

## About

This is a fork of intern with few features added/fixed:
- Added winston logs to intern Proxy server
- Separated proxy settings for intern Proxy server & dig dug tunnel

# Winston logs

```json
{
	"internServerOptions": {
		"logger" : {
		"console" : true,
		"filename" : "your-file.log"
		}
	}
}
```

# Separated proxy settings for intern Proxy Server

You can configure intern Proxy server options using:

```json
{
	"internServerOptions": {
		"proxy": "yourProxy"
		}
}
```