'use client'

import { Box, Breadcrumbs, Button, Typography } from "@mui/material"
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import './profile.css'
import Image from "next/image";
import dashlmg from "../../../../public/images/backgrounds/back.jpg"

import { useState } from 'react';
import { IconBrandX } from "@tabler/icons-react"
import { IconBrandInstagram } from "@tabler/icons-react"
import { IconBrandFacebook } from "@tabler/icons-react"
import { IconUser } from "@tabler/icons-react"
import { IconWritingSign } from "@tabler/icons-react"
import { IconIdBadge } from "@tabler/icons-react"
import { IconDeviceImac } from "@tabler/icons-react"
import { IconDeviceSim } from "@tabler/icons-react"
import { IconCalendarDue } from "@tabler/icons-react"
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NoEncryptionIcon from '@mui/icons-material/NoEncryption';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MobileScreenShareOutlinedIcon from '@mui/icons-material/MobileScreenShareOutlined';


const Profile = () => {
    const [profileData] = useState({
        firstName: "Harsh",
        lastName: "Sharma",
        mobileNo: "1234567890",
        email: "Harshkumar@gmail.com",
        dob: "01/01/2001",
        department: "Engineering",
        designation: "Software Engineer",
        adharNo: "1234-5678-9012",
        address: "Saharanpur",
        signature: "Harsh Sharma"
    });

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (


        <div className="maincontainer">
            <div role="presentation" >
                <Breadcrumbs aria-label="breadcrumb">


                    <Typography className="breadcrumbs">Home</Typography>
                    <Typography className="breadcrumbs">/</Typography>
                    <Typography className="breadcrumbs">Profile</Typography>

                </Breadcrumbs>
            </div>
            <Box className="profile">
                <Box className="flexbox">
                    <Box className="leftside">
                        <Box className="imagecontainer">
                            <Image src={dashlmg} alt={""} className="image" />
                        </Box>
                        <Box>
                            <Box className="name">
                                <IconUser className="usericon" />
                                <Typography className="firstname">{profileData.firstName}</Typography>
                                <Typography className="lastname">{profileData.lastName}</Typography>
                            </Box>
                            <Box className="designation">
                                <IconWritingSign className="signatureicon" /> <Typography className="firstname">Signature</Typography>
                                <Button onClick={handleClickOpen} size="small" className="viewbutton">
                                    < VisibilityIcon />
                                </Button>
                                <BootstrapDialog
                                    onClose={handleClose}
                                    aria-labelledby="customized-dialog-title"
                                    open={open}
                                >
                                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                        Signature
                                    </DialogTitle>
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={(theme) => ({
                                            position: 'absolute',
                                            right: 8,
                                            top: 8,
                                            color: theme.palette.grey[500],
                                        })}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                    <DialogContent dividers>
                                        <Box className="imagecontainer">
                                            <Image src={dashlmg} alt={""} className="image" />
                                        </Box>
                                    </DialogContent>
                                    <DialogActions>

                                    </DialogActions>
                                </BootstrapDialog>

                            </Box>
                        </Box>


                    </Box>
                    <Box className="rightside">
                        <Box className="header">
                            <Box className="myprofile">My Profile</Box>
                            <Box className="edit">
                                <Box className="editpage"><ModeEditOutlineOutlinedIcon className="editpagechield" /> <Typography>Update Profile</Typography></Box>
                                <Box className="changepass"><NoEncryptionIcon className="editpagechield" /><Typography>Change Password </Typography></Box>
                            </Box>
                        </Box>

                        <Box className="middlebox">
                            <Box className="inputbox">
                                <Box className="datawidth">
                                    <Typography className="inputleft label"><EmailOutlinedIcon className="labelicon" /> Email</Typography>
                                    <Typography className="inputleft">{profileData.email}</Typography>
                                </Box>
                                <Box className="datawidth">
                                    <Typography className="inputright label"><MobileScreenShareOutlinedIcon className="labelicon" /> Mobile Number</Typography>
                                    <Typography className="inputright">{profileData.mobileNo}</Typography>
                                </Box>

                            </Box>
                            <Box className="inputbox">
                                <Box className="datawidth">
                                    <Typography className="inputleft label"><IconCalendarDue className="labelicon" /> Date Of Birth</Typography>
                                    <Typography className="inputleft">{profileData.dob}</Typography>
                                </Box>
                                <Box className="datawidth">
                                    <Typography className="inputright label"><IconDeviceSim className="labelicon" />Department</Typography>
                                    <Typography className="inputright">{profileData.department}</Typography>
                                </Box>

                            </Box>
                            <Box className="inputbox">
                                <Box className="datawidth">
                                    <Typography className="inputleft label"><IconDeviceImac className="labelicon" /> Designation</Typography>
                                    <Typography className="inputleft">{profileData.designation}</Typography>
                                </Box>
                                <Box className="datawidth">
                                    <Typography className="inputright label"><IconIdBadge className="labelicon" /> Adhar No</Typography>
                                    <Typography className="inputright">{profileData.adharNo}</Typography>
                                </Box>

                            </Box>
                        </Box>


                        <Box className="footer">
                            <Box>
                                <Typography>Last Update : 11/10/2024</Typography>
                            </Box>
                            <Box className="icons">
                                <Box className="showicons"><IconBrandFacebook /></Box>
                                <Box className="showicons"><IconBrandX /></Box>
                                <Box className="showicons"><IconBrandInstagram /></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>


    )
}

export default Profile;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));





