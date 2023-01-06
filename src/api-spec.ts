import { Dropbox, DropboxResponse, Error, files } from "dropbox";
import fs from "fs";
import path from "path";

const ACCESS_TOKEN = "";

jasmine.DEFAULT_TIMEOUT_INTERVAL = 5 * 1000;

describe("Dropbox file service", () => {
  let dropbox: Dropbox;
  let status: Number;

  beforeEach((done) => {
    dropbox = new Dropbox({ accessToken: ACCESS_TOKEN });
    status = 0;
    done();
  });

  it("can upload a file", (done) => {
    fs.readFile(
      path.join(__dirname, "../src/hello.txt"),
      "utf8",
      (err, contents) => {
        if (err) {
          done.fail("File is not found.");
        } else {
          dropbox
            .filesUpload({ path: "/hello.txt", contents })
            .then((response: DropboxResponse<files.FileMetadata>) => {
              expect(response.status).toEqual(200);
              done();
            })
            .catch((err: Error<files.UploadError>) => {
              done.fail("File upload failed.");
            });
        }
      }
    );
  });

  it("can get file metadata", (done) => {
    dropbox
      .filesGetMetadata({ path: "/hello.txt" })
      .then(
        (
          response: DropboxResponse<
            files.FileMetadata | files.FolderMetadata | files.DeletedMetadata
          >
        ) => {
          expect(response.status).toEqual(200);
          done();
        }
      )
      .catch((err: Error<files.GetMetadataError>) => {
        done.fail("Get file metadata failed.");
      });
  });

  it("can delete a file", (done) => {
    dropbox
      .filesDeleteV2({ path: "/hello.txt" })
      .then((response: DropboxResponse<files.DeleteResult>) => {
        expect(response.status).toEqual(200);
        done();
      })
      .catch((err: Error<files.DeleteError>) => {
        done.fail("Delete file failed.");
      });
  });
});
