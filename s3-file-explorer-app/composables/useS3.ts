export const useS3 = () => {

  const listFiles = async () => {
    return await window.s3Api.listFiles()
  }

  return { listFiles }
}
