using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace jarvis2UI
{
    /// <summary>
    /// Summary description for ProcessImageProcessingRequest
    /// </summary>
    public class ProcessImageProcessingRequest : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            String username = "guest";
            String sessionId = "guestsessionid";
            String intent = context.Request["intent"];

            var file = context.Request.Files[0];
            byte[] fileBytes = new byte[file.ContentLength];
            file.InputStream.Read(fileBytes, 0, file.ContentLength);

            Uri webService = new Uri(@"https://10.207.142.34:5003/api/imageprocessor/receiveFile?sessionId=" + sessionId + "-" + username + "&intent=" + intent);
            HttpRequestMessage requestMessage = new HttpRequestMessage(HttpMethod.Post, webService);
            requestMessage.Headers.ExpectContinue = false;

            MultipartFormDataContent multiPartContent = new MultipartFormDataContent("----Boundary");
            ByteArrayContent byteArrayContent = new ByteArrayContent(fileBytes);
            byteArrayContent.Headers.Add("Content-Type", "application/octet-stream");
            multiPartContent.Add(byteArrayContent, "file", file.FileName);
            requestMessage.Content = multiPartContent;

            HttpClient httpClient = new HttpClient();
            try
            {
                Task<HttpResponseMessage> httpRequest = httpClient.SendAsync(requestMessage, HttpCompletionOption.ResponseContentRead, CancellationToken.None);
                HttpResponseMessage httpResponse = httpRequest.Result;
                HttpStatusCode statusCode = httpResponse.StatusCode;
                HttpContent responseContent = httpResponse.Content;

                if (responseContent != null)
                {
                    Task<String> stringContentsTask = responseContent.ReadAsStringAsync();
                    String stringContents = stringContentsTask.Result;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}