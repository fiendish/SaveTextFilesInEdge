# Save Text Files In Edge
Microsoft doesn't think that saving text files is important. This is an Edge browser extension to let you save text files.

Status: Waiting for Edge to have fewer bugs.

Basically works as of Edge Insider Preview 14959, except for msSaveBlob bugs that are already being tracked where "known" file types bypass the save dialog, downloads the file to some unknown temporary location, and then opens it automatically in Notepad instead of just asking you where to save it. 

Unfortunately Preview 14986 crashes on the msSaveBlob call.
