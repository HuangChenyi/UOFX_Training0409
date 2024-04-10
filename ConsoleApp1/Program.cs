using Ede.Uofx.FormSchema.UofxFormSchema;
using Ede.Uofx.PubApi.Sdk.NetStd.Service;
using Ede.Uofx.PubApi.Sdk;
using Ede.Uofx.PubApi.Sdk.NetStd.Models.Base;

namespace ConsoleApp1
{
    internal class Program
    {
        async static Task Main(string[] args)
        {

            //設定UOFX服務的URL
            UofxService.UofxServerUrl= "https://demox3.edetw.com/";
            //設定UOFX服務的TOKEN
            UofxService.Key = "eyJDbGllbnRJZCI6Ijg3MjllOWFmLTg2NzktNDNkOS1iMTRkLTA4ZGM1ODk4YzQ5NSIsIlByaXZhdGVLZXkiOiJQRkpUUVV0bGVWWmhiSFZsUGp4TmIyUjFiSFZ6UG5Ka1QxcGxUMnBRTTNoaVVIUlBTVWhaVDJoMFJUVm1WRzFoWkVkVmJUUkdTRzh3VlROMWMxUkNWRk5pY2twSFFXVjVjSHBUYkRKVlRYUndLMUpzTkhnMlZqSXhZV2RSYlU1a1JFRnFNRU5QV0U1dGVFVnZORzFDU2xNMUx6WjBVVkZZUmxOSGMwaFlVM1l4VmpkcVpEbHRRVVZXTkhKUWJHbEtkbTVJZFdWVlMyNURhV1Y1VERGdk5YUk5RM1Z1YlU4ekwwcFBMMVYzUkV0TVZUVktiV0ZLWjBkbE4xUmtiVTAwVlQwOEwwMXZaSFZzZFhNXHUwMDJCUEVWNGNHOXVaVzUwUGtGUlFVSThMMFY0Y0c5dVpXNTBQanhRUGpKWFJYaFNVekF5VG5KSGVXRTBNbTUxY1hwVU1VZG9ja0ZQUzAxV1ExUm1TalpUUWsxdVJIYzBlR1UxWjFwaVVsbExUVzVyYVZwVFJGSnJXRWMzTkVOcE5tcExSVGN6T1ZoaFdHTnZlR0pHV25SemFVTlJQVDA4TDFBXHUwMDJCUEZFXHUwMDJCZWt4WFNrMUVWbFF2Y214Rk9HdHRNVkIxYkhObVMxRk1ia0pvYkc5c05TOVpXU3N6S3psek1Ea3hSekJVVFVaM1R6WlVMMXBQUW5KTmFYbHRTbE15WVVRd1VqVndjVU5YVlVnM1EwVnJhbEJUTTFNd2JsRTlQVHd2VVQ0OFJGQVx1MDAyQmF6ZHBkM1Z6Ymxkd1lWSnpSWGh5V1dWTmMzQjVTbUZOTkV4VlZHdzNjbGQ1ZVVoSWFXNWxiSFY1TVUxTGRuaExiazVzUXpoMFlVaDFPRGR3U0ZScmNXdGhNMHRhVmtGbE9WcDZXa3Q0Y3pKWGIyUm1kMUU5UFR3dlJGQVx1MDAyQlBFUlJQa05HV1RSVlVrNUxObGQyU1V0QmJtbGlURFUyTkZwVFdYVklSM2cyWlhad1UybE1aRkJySzA5R05taHVURVl3VVZsbk1URk1WRzFMYUVFcldHTktiM0l4VVZaWU5IWmFWbE5OTDNkMlYyWnFjMVpJSzJKUlBUMDhMMFJSUGp4SmJuWmxjbk5sVVQ0eFMyOTROMnRzSzJzNWEzVlZXbVZOVUdGMVpqZHpkRVJHWkVkUk1YWTFSamxJWjBJcmJXdG9PV3R4ZUVNNGVrTTRaWHBIZVdKQ1NYSlRNRzQ0ZVhWd2JucDJNRzVrYW5odWFrTXhlVmhNZFZOV2QxVnBVVDA5UEM5SmJuWmxjbk5sVVQ0OFJENU1iMGRWWVVKTWVIVnhRV2g0YVZaTVJVSlNabE52VTNWaGEyVnJkWFF3VVhCYVNHUmhXall2U1dZNWJsQjNOVmR5TlRBeE5UQnRUMGwxVkhWTUsyd3pkRkpaVEU5WFowOTVVWE50TW1GNlRqWmxNbU5SUVdVeVVEUkRVRW8yTHpWUWJ6VnFiMjAzTTFvclIyTmliRVkyWW5VMFdrMVNPSGt2VTNNek9GUlphVzUzUmxWc2JuUXZOSFk0V1ZFMlZrazVlak5sYTFsdVYyOUhXVUpqWW1wMFdYUjBNV1o2ZEhOT2EwVTlQQzlFUGp3dlVsTkJTMlY1Vm1Gc2RXVVx1MDAyQiIsIlB1YmxpY0tleSI6IlBGSlRRVXRsZVZaaGJIVmxQanhOYjJSMWJIVnpQbkprVDFwbFQycFFNM2hpVUhSUFNVaFpUMmgwUlRWbVZHMWhaRWRWYlRSR1NHOHdWVE4xYzFSQ1ZGTmlja3BIUVdWNWNIcFRiREpWVFhSd0sxSnNOSGcyVmpJeFlXZFJiVTVrUkVGcU1FTlBXRTV0ZUVWdk5HMUNTbE0xTHpaMFVWRllSbE5IYzBoWVUzWXhWamRxWkRsdFFVVldOSEpRYkdsS2RtNUlkV1ZWUzI1RGFXVjVUREZ2TlhSTlEzVnViVTh6TDBwUEwxVjNSRXRNVlRWS2JXRktaMGRsTjFSa2JVMDBWVDA4TDAxdlpIVnNkWE1cdTAwMkJQRVY0Y0c5dVpXNTBQa0ZSUVVJOEwwVjRjRzl1Wlc1MFBqd3ZVbE5CUzJWNVZtRnNkV1VcdTAwMkIiLCJQcml2YXRlS2V5UGVtIjoiLS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLVxuTUlJQ1hRSUJBQUtCZ1FDdDA1bDQ2TS9mRnNcdTAwMkIwNGdkZzZHMFRsOU9acDBaU2JnVWVqUlRlNnhNRk5KdXNrWUI3XG5Lbk5LWFpReTJuNUdYakhwWGJWcUJDWTEwTUNQUUk1YzJiRVNqaVlFbExuL3ExQkJjVklhd2RkSy9WWHVOMzJZXG5BUlhpc1x1MDAyQldJbVx1MDAyQmNlNTVRcWNLSjdJdldqbTB3SzZlWTdmOGs3OVRBTW90VGttWm9tQVo3dE4yWXpoUUlEQVFBQlxuQW9HQUxvR1VhQkx4dXFBaHhpVkxFQlJmU29TdWFrZWt1dDBRcFpIZGFaNi9JZjluUHc1V3I1MDE1MG1PSXVUdVxuTFx1MDAyQmwzdFJZTE9XZ095UXNtMmF6TjZlMmNRQWUyUDRDUEo2LzVQbzVqb203M1pcdTAwMkJHY2JsRjZidTRaTVI4eS9TczNcbjhUWWlud0ZVbG50LzR2OFlRNlZJOXozZWtZbldvR1lCY2JqdFl0dDFmenRzTmtFQ1FRRFpZVEZGTFRZMnNiSnJcbmphZTZyTlBVYUdzQTRveFVKTjhucElFeWNQRGpGN21CbHRGZ295ZVNKbElOR1JjYnZnS0xxTW9UdmYxZHBkeWpcbkZzVm0yeUlKQWtFQXpMV0pNRFZUL3JsRThrbTFQdWxzZktRTG5CaGxvbDUvWVlcdTAwMkIzXHUwMDJCOXMwOTFHMFRNRndPNlQvXG5aT0JyTWl5bUpTMmFEMFI1cHFDV1VIN0NFa2pQUzNTMG5RSkJBSk80c0xySjFxV2tiQk1hMkhqTEtjaVdqT0MxXG5FNWU2MXNzaHg0cDNwYnN0VENyOFNwelpRdkxXaDd2TzZSMDVLcEd0eW1WUUh2V2MyU3NiTmxxSFg4RUNRQWhXXG5PRkVUU3VscnlDZ0o0bXlcdTAwMkJldUdVbUxoeHNlbnI2VW9pM1Q1UGpoZW9aeXhkRUdJTmRTMDVpb1FQbDNDYUs5VUZcblZcdTAwMkJMMlZValA4TDFuNDdGUi9tMENRUURVcWpIdVNYNlQyUzVSbDR3OXE1L3V5ME1WMFpEVy9rWDBlQUg2YVNIMlxuU3JFTHpNTHg3TWJKc0VpdExTZnpLNm1mTy9TZDJQR2VNTFhKY3U1SlhCU0pcbi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tIiwiUHVibGljS2V5UGVtIjoiLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cbk1JR2ZNQTBHQ1NxR1NJYjNEUUVCQVFVQUE0R05BRENCaVFLQmdRQ3QwNWw0Nk0vZkZzXHUwMDJCMDRnZGc2RzBUbDlPWlxucDBaU2JnVWVqUlRlNnhNRk5KdXNrWUI3S25OS1haUXkybjVHWGpIcFhiVnFCQ1kxME1DUFFJNWMyYkVTamlZRVxubExuL3ExQkJjVklhd2RkSy9WWHVOMzJZQVJYaXNcdTAwMkJXSW1cdTAwMkJjZTU1UXFjS0o3SXZXam0wd0s2ZVk3ZjhrNzlUQU1cbm90VGttWm9tQVo3dE4yWXpoUUlEQVFBQlxuLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tIn0=";
            EmplQueryRequestModel model= new EmplQueryRequestModel();
            //使用者代碼
            model.UserCode = "sales001";
            //公司別代碼
            model.CorpCode = "woodman";
            var emp= await UofxService.BASE.OrgEmpl.GetDept(model);

            var dept = emp.Depts.FirstOrDefault();

            //上傳附件
            var file = await UofxService.File.FileUpload
                ("D:/採購資訊.pdf");
           
            var item = new FileItem() { Id= file.Id,FileName=file.FileName};
            
            List<FileItem> fileList = new List<FileItem>();
            fileList.Add(item);

            string msg = "";




            try
            {
                var traceid = await UofxService.BPM.
                  ApplyForm(new UofxFormSchema()
                  {

                      Account = "sales001",
                      DeptCode = dept.Code,
                      AttachFiles = fileList,
                      Fields =
                      { C002 = "高雄市三民區", C003 = "小黃",
                          C004 = "0912345678" }
                  });

                msg += "\r\n" + $"It is success.";
                msg += "\r\n" + $"Trace Id: {traceid}";
            }
            catch (Exception ex)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                var errorModel = UofxService.Error.ConvertToModel(ex);
                msg += "\r\n" + UofxService.Json.Convert(errorModel);

            }

            Console.WriteLine(msg);



        }
    }
}