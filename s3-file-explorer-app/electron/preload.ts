import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('s3Api', {
  ping: () => ipcRenderer.invoke('ping'),
  listFiles: () => ipcRenderer.invoke('s3:list-files')
});