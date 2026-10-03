# ==============================================================================
# B.K.S. Industries - Zero-Dependency Native Windows Local HTTP Web Server
# Serves the complete revamped website locally on http://localhost:8080/
# ==============================================================================

param(
    [int]$Port = 8080
)

$rootDir = $PSScriptRoot
if (-not $rootDir) {
    $rootDir = Get-Location
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".webp" = "image/webp"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".txt"  = "text/plain; charset=utf-8"
    ".xml"  = "application/xml; charset=utf-8"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
}

try {
    $listener.Start()
    Write-Host ""
    Write-Host "======================================================================" -ForegroundColor Cyan
    Write-Host "   B.K.S. INDUSTRIES - LOCAL WEB SERVER ONLINE (PORT $Port)           " -ForegroundColor Green
    Write-Host "======================================================================" -ForegroundColor Cyan
    Write-Host "   Open in Browser: http://localhost:$Port/" -ForegroundColor Yellow
    Write-Host "   Serving files from: $rootDir" -ForegroundColor Gray
    Write-Host "   Press Ctrl+C in this terminal window to stop the server." -ForegroundColor Gray
    Write-Host "======================================================================" -ForegroundColor Cyan
    Write-Host ""

    # Automatically launch default browser
    Start-Process "http://localhost:$Port/"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        $relPath = $rawPath.TrimStart('/').Replace('/', '\')
        if ([string]::IsNullOrWhiteSpace($relPath) -or $relPath -eq "\") {
            $relPath = "index.html"
        }

        # Resolve primary and subfolder file paths
        $targetFile = Join-Path $rootDir $relPath
        if (-not (Test-Path $targetFile -PathType Leaf)) {
            $nested = Join-Path $rootDir "BKS-FINAL--main\$relPath"
            if (Test-Path $nested -PathType Leaf) {
                $targetFile = $nested
            }
        }

        if (Test-Path $targetFile -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($targetFile).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }

            $response.ContentType = $contentType
            $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
            $response.AddHeader("Pragma", "no-cache")
            $response.AddHeader("Expires", "0")
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            try {
                $bytes = [System.IO.File]::ReadAllBytes($targetFile)
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } catch {
                $response.StatusCode = 500
            }
        } else {
            $response.StatusCode = 404
            $errHtml = "<html><head><title>404 Not Found</title></head><body style='font-family:sans-serif;padding:2rem;'><h2>404 - File Not Found</h2><p>The requested file <code>$relPath</code> was not found on this local server.</p><a href='/'>Return to Home</a></body></html>"
            $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errHtml)
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errBytes.Length
            $response.OutputStream.Write($errBytes, 0, $errBytes.Length)
        }

        try {
            $response.OutputStream.Close()
        } catch {}
    }
} catch {
    Write-Host "Server encountered an issue or was stopped: $($_.Exception.Message)" -ForegroundColor Red
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
