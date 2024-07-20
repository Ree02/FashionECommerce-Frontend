import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LightFontColor } from "../functions/colors.tsx";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
        width: "500px",
    },
    [theme.breakpoints.up("sm")]: {
        width: "500px",
    },
    [theme.breakpoints.up("md")]: {
        width: "500px",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: LightFontColor,
    fontWeight: "bold",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

const CustomToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: "64px",
    paddingLeft: "24px",
    paddingRight: "0px",
    [theme.breakpoints.up("sm")]: {
        paddingLeft: "24px",
        paddingRight: "0px",
    },
}));

export default function PrimarySearchAppBar() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="default">
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneIcon />
                    </Badge>
                </IconButton>
                <p>お知らせ</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <FavoriteBorderIcon />
                </IconButton>
                <p>お気に入り</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <ShoppingCartOutlinedIcon />
                </IconButton>
                <p>カート</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "primary" }}>
                <CustomToolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { xs: "none", md: "block" },
                            fontWeight: "bold",
                            fontFamily: "monospace, sans-serif",
                            marginRight: 2,
                            color: LightFontColor,
                        }}
                    >
                        ZOZOTOWN
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon sx={{ color: LightFontColor }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="すべてのアイテムから探す"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton size="large" sx={{ color: LightFontColor }}>
                            <Badge badgeContent={4} color="error">
                                <NotificationsNoneIcon />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" sx={{ color: LightFontColor }}>
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            sx={{ marginRight: "0px", color: LightFontColor }}
                        >
                            <ShoppingCartOutlinedIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            sx={{ marginRight: "0px", color: LightFontColor }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            sx={{ color: LightFontColor }}
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </CustomToolbar>
            </AppBar>
            {renderMobileMenu}
        </Box>
    );
}
