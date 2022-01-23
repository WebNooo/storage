import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./redux";
import { Actions } from "../store/reducers";
import { Api } from "../api";

export const useFileDropZone = () => {
  // const [isDrag, setIsDrag] = useState(false);
  const isDrag = useAppSelector((state) => state.fileReducer.dropZoneActive);
  const dispatch = useAppDispatch();

  const handleDragEnter = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("start");

      Object.values(event.dataTransfer.items).forEach((x: any) => {
        console.log("item", x);
      });

      Object.values(event.dataTransfer.files || {}).forEach((x: any) => {
        console.log("files", x);
      });

      Object.values(event.dataTransfer.types).forEach((x: any) => {
        console.log("type", x);
      });
 
      dispatch(Actions.file.dropZoneState(true));
    },
    [dispatch]
  );

  const handleDragLeave = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      console.log("end");
      dispatch(Actions.file.dropZoneState(false));
    },
    [dispatch]
  );

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("over");
  }, []);

  const handleDrop = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();
      // console.group('dataTransfer');
      // console.log("items", event.dataTransfer.items);
      // console.log("files", event.dataTransfer.files);
      // console.log("types", event.dataTransfer.types);
      // console.log("types", event.dataTransfer);
      // console.groupEnd();

      const form = new FormData();

      Object.values(event.dataTransfer.items).forEach((x: any) => {
        console.log("item", x.kind, x.type);
      });

      Object.values(event.dataTransfer.files || {}).forEach((x: any) => {
        form.append("files", x);
      });

      Object.values(event.dataTransfer.types).forEach((x: any) => {
        console.log("type", x);
      });

      // files.forEach((file: any) => {
      //   if (!file.type && file.size % 4096 == 0) {
      //     console.log("folder", file.kind, file.type);
      //   } else {
      //     console.log("file", file.kind, file.type);
      //   }
      // });

      const fetch = async (form: any) => {
        await Api.file.upload(form);
      };

      fetch(form);

      dispatch(Actions.file.dropZoneState(false));
    },
    [dispatch]
  );

  const handleDropClick = useCallback(
    (event) => {
      event.preventDefault();
      console.log("click");
      dispatch(Actions.file.dropZoneState(false));
    },
    [dispatch]
  );

  return {
    isDrag,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
    handleDropClick,
  };
};
