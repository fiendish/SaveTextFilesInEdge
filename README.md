# Save Text Files In Edge
Microsoft doesn't think that saving text files is important. This is an Edge browser extension to let you save text files.


There are a number of reported bugs in Microsoft Edge that prevent this extension from working properly.
When Edge is fixed the extension should work. Maybe I'll even get to use msSaveOrOpenBlob for its intended purpose (fingers crossed).

Bugs in Edge affecting this extension:

1. navigator.msSaveOrOpenBlob just doesn't work in extensions.
2. download attribute value is ignored, giving garbage file names.
3. download attribute does not give "Save/Save As" dialog for many hrefs, and just dumps content into Notepad.
