import { SelectionBar } from "@/base/components/Navbar";
import { AppContext } from "@/new/photos/types/context";
import { FluidContainer } from "@ente/shared/components/Container";
import BackButton from "@mui/icons-material/ArrowBackOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton, Tooltip } from "@mui/material";
import { t } from "i18next";
import { useContext } from "react";
import { getTrashFilesMessage } from "utils/ui";

interface IProps {
    deleteFileHelper: () => void;
    close: () => void;
    count: number;
    clearSelection: () => void;
}

export default function DeduplicateOptions({
    deleteFileHelper,
    close,
    count,
    clearSelection,
}: IProps) {
    const { setDialogMessage } = useContext(AppContext);

    const trashHandler = () =>
        setDialogMessage(getTrashFilesMessage(deleteFileHelper));

    return (
        <SelectionBar>
            <FluidContainer>
                {count ? (
                    <IconButton onClick={clearSelection}>
                        <CloseIcon />
                    </IconButton>
                ) : (
                    <IconButton onClick={close}>
                        <BackButton />
                    </IconButton>
                )}
                <Box ml={1.5}>{t("selected_count", { selected: count })}</Box>
            </FluidContainer>
            <Tooltip title={t("delete")}>
                <IconButton onClick={trashHandler}>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </SelectionBar>
    );
}
