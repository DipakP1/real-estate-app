"use client";
import {
  Avatar,
  Tooltip,
  IconButton,
  Box,
  Button,
  styled,
  InputBase,
  useTheme,
} from "@mui/material";
import AttachFileTwoToneIcon from "@mui/icons-material/AttachFileTwoTone";
import SendTwoToneIcon from "@mui/icons-material/SendTwoTone";
import EmojiPicker from "emoji-picker-react";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";

const MessageInputWrapper = styled(InputBase)(
  ({ theme }) => `
   
    width: 100%;
`
);

const Input = styled("input")({
  display: "none",
});

function BottomBarContent() {
  const theme: any = useTheme();
  const [openEmoji, setopenEmoji] = useState(false);
  const [emoji, setEmoji] = useState({});

  const user = {
    name: "Catherine Pike",
    avatar: "/static/images/avatars/1.jpg",
  };

  const handleClickEmoji = (data: any) => {
  };

  console.log(emoji, "EMOJI");

  return (
    <>
      <Box position={"absolute"} bottom={100} right={100}>
        <EmojiPicker
          open={openEmoji}
          searchDisabled={true}
          onEmojiClick={(data, e) => setEmoji((prev:any, i:any)=> ({...prev, [data?.unified]:data?.emoji}))}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          backgroundColor: "#fff",
          border: "1px solid #ececec",
        }}
      >
        <Box flexGrow={1} display="flex" alignItems="center">
          <Avatar
            sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
            alt={user.name}
            src={user.avatar}
          />
          <MessageInputWrapper
            autoFocus
            onChange={() => {}}
              placeholder="Type a message here..."
            fullWidth
          />
        </Box>

        <Box>
          <Tooltip arrow placement="top" title="Choose an emoji">
            <IconButton
              onClick={() => setopenEmoji((prev) => !prev)}
              sx={{ fontSize: "16px" }}
              color="primary"
            >
              😀
            </IconButton>
          </Tooltip>

          <Input accept="image/*" id="messenger-upload-file" type="file" />
          <Tooltip arrow placement="top" title="Attach a file">
            <label htmlFor="messenger-upload-file">
              <IconButton sx={{ mx: 1 }} color="primary" component="span">
                <AttachFileTwoToneIcon fontSize="small" />
              </IconButton>
            </label>
          </Tooltip>
          <IconButton
            sx={{
              backgroundColor: "#000D07",
              borderRadius: "10px",
              padding: "10px",
              "&:hover": { background: "#000D07" },
            }}
          >
            <IconSend style={{ color: "#fff" }} />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

export default BottomBarContent;
