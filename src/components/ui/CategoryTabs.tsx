import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { LightFontColor } from "../functions/colors.tsx";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function CategoryTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleSelectChange = (event: SelectChangeEvent) => {
        setValue(Number(event.target.value));
    };

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: "primary.main",
                color: LightFontColor,
            }}
        >
            <Tabs
                value={value}
                onChange={handleChange}
                centered
                textColor="inherit"
                indicatorColor="secondary"
                sx={{ display: { xs: "none", sm: "block" }, height: "48px" }}
            >
                <Tab
                    label="すべてのアイテム"
                    sx={{
                        fontWeight: "bold",
                        width: "200px",
                    }}
                />
                <Tab
                    label="シューズアイテム"
                    sx={{
                        fontWeight: "bold",
                        width: "200px",
                    }}
                />
                <Tab
                    label="コスメアイテム"
                    sx={{
                        fontWeight: "bold",
                        width: "200px",
                    }}
                />
            </Tabs>
            <Select
                value={value.toString()}
                onChange={handleSelectChange}
                autoWidth
                MenuProps={{
                    PaperProps: {
                        sx: {
                            width: "100%",
                            minWidth: "170px",
                        },
                    },
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    height: "48px",
                    fontWeight: "bold",
                    color: LightFontColor,
                    fontSize: "14px",
                    paddingLeft: "8px",
                    minWidth: "200px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiSvgIcon-root": {
                        color: LightFontColor,
                    },
                }}
            >
                <MenuItem value={0}>すべてのアイテム</MenuItem>
                <MenuItem value={1}>シューズアイテム</MenuItem>
                <MenuItem value={2}>コスメアイテム</MenuItem>
            </Select>
        </Box>
    );
}
