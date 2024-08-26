import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import ButtonDropdown from "../../../components/button-dropdown";

import {
  MoreSvg,
  FavoriteSvg,
  EditSvg,
  AttachedFileSvg,
  ArrowForwardSvg,
  ArrowBackwardSvg,
  TextBoldSvg,
  TextItalicSvg,
  BulletedListSvg,
  NumberedListSvg,
  AttachPhotoSvg,
  InsertLinkSvg,
  InsertCodeSvg,
} from "../../../assets/images";

import { PREFIX_CLASS } from "../utils";

export default function Cards() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="ps-4">
      <div className="text-end fs-8 text-secondary mb-2">2 comments</div>
      <div className="card border-bottom-0">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div>
            <span className="d-block fs-8">
              Chapter Assignment 2 / HTML&CSS
            </span>
            <h2 className="fs-6 mb-0 mt-1">
              Please check this file for me, thanks!
            </h2>
          </div>
          <ButtonDropdown
            className={`${PREFIX_CLASS}__dropdown--more`}
            title={<img src={MoreSvg} alt="more" />}
            data={[{ id: 0, content: "more options" }]}
          />
        </div>
        <div className="card-body d-flex align-items-start pe-6">
          <div className="avatar ratio ratio-1x1 me-2">
            <img
              src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=2134&q=80"
              alt="Emily Wang"
              className="img-fluid rounded-circle object-fit-cover"
            />
          </div>
          <div className="border-bottom pb-4">
            <div className="mb-4">
              <h3 className="fs-6 m-0">Emily Wang</h3>
              <span className="fs-8 text-secondary">
                10:38 AM (4 hours ago)
              </span>
            </div>
            <div className="fs-7">
              <p>
                Hi Teacher, the attached file is my homework of chapter 2. And
                here comes a question: Why in the following code the height of
                the <code className="font-monospace text-primary">div</code> is
                bigger than the height of the{" "}
                <code className="font-monospace text-primary">img</code> ? There
                is a gap below the image, but it doesn’t seems to be a
                padding/margin.
                <br />
                What is the gap or extra space below image?
              </p>
              <button
                type="button"
                className="btn btn-light border rounded-1 d-flex align-items-center">
                <img
                  src={AttachedFileSvg}
                  alt="HW-2-David.zip"
                  className="me-2"
                />
                <span>HW-2-David.zip</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("card", !isEdit && "border-top-0")}>
        {isEdit ? (
          <>
            <div className="card-header d-flex column-gap-5 py-4 px-5">
              <select
                className={clsx(
                  "form-select border-0 bg-light fw-bold p-0",
                  `${PREFIX_CLASS}__reply-text-select`
                )}
                aria-label="select text style"
                name="text-style"
                id="text-style">
                <option value="body-text" selected>
                  Body Text
                </option>
                <option value="header-1">Header 1</option>
                <option value="header-2">Header 2</option>
                <option value="header-3">Header 3</option>
                <option value="header-4">Header 4</option>
                <option value="header-5">Header 5</option>
                <option value="header-6">Header 6</option>
              </select>
              <button type="button" className="btn border-0 p-0">
                <img src={TextBoldSvg} alt="bold" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={TextItalicSvg} alt="italic" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={BulletedListSvg} alt="bulleted list" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={NumberedListSvg} alt="numbered list" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={AttachPhotoSvg} alt="attach photo" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={InsertLinkSvg} alt="insert link" />
              </button>
              <button type="button" className="btn border-0 p-0">
                <img src={InsertCodeSvg} alt="insert code" />
              </button>
            </div>
            <div className="card-body p-0">
              <textarea
                className={clsx(
                  "form-control border-0 py-4 px-5",
                  `${PREFIX_CLASS}__reply-textarea`
                )}
                placeholder="Reply an answer..."
                name="reply"
                aria-label="reply an answer"></textarea>
            </div>
            <div className="card-footer text-end bg-transparent border-top-0 py-4">
              <button
                type="button"
                className="btn btn-outline-primary rounded-1 py-2 px-6 me-2"
                onClick={() => setIsEdit(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary rounded-1 py-2 px-6"
                onClick={() => setIsEdit(false)}>
                Reply
              </button>
            </div>
          </>
        ) : (
          <div className="card-body d-flex align-items-start pe-6 pt-0">
            <div className="avatar ratio ratio-1x1 me-2">
              <img
                src="https://images.unsplash.com/photo-1514794749374-fb67509dbb7f?ixlib=rb-1.2.1&ixid=eyjhchbfawqiojeymdd9&auto=format&fit=crop&w=2000&q=80"
                alt="Andy Chen"
                className="img-fluid rounded-circle object-fit-cover"
              />
            </div>
            <div>
              <div className="mb-4 d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="fs-6 m-0">Andy Chen (You)</h3>
                  <span className="fs-8 text-secondary">
                    13:24 AM (1 hours ago)
                  </span>
                </div>
                <div>
                  <button type="button" className="btn p-0 me-5 border-0">
                    <img src={FavoriteSvg} alt="favorite" />
                  </button>
                  <button
                    type="button"
                    className="btn p-0 border-0"
                    onClick={() => setIsEdit(true)}>
                    <img src={EditSvg} alt="edit" />
                  </button>
                </div>
              </div>
              <div className="fs-7">
                <p>
                  Hi David, by default, an image is rendered inline, like a
                  letter so it sits on the same line that a, b, c and d sit on.
                  There is space below that line for the descenders you find on
                  letters like g, j, p and q.
                </p>
                <p>You can:</p>
                <ul>
                  <li>
                    adjust the{" "}
                    <code className="font-monospace text-primary">
                      vertical-align
                    </code>{" "}
                    of the image to position it elsewhere (e.g. the{" "}
                    <code className="font-monospace text-primary">middle</code>{" "}
                    ) or
                  </li>
                  <li>
                    change the{" "}
                    <code className="font-monospace text-primary">display</code>{" "}
                    so it isn’t inline.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      {!isEdit && (
        <div className="d-flex justify-content-between pt-4 pb-6 align-items-center">
          <div>
            <NavLink to="#" className="me-5">
              <img src={ArrowBackwardSvg} alt="backward" />
            </NavLink>
            <NavLink to="#">
              <img src={ArrowForwardSvg} alt="forward" />
            </NavLink>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary me-5 rounded-1 py-2 px-6">
              Mark as read
            </button>
            <button
              type="button"
              className="btn btn-primary rounded-1 py-2 px-6">
              Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
