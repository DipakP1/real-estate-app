'use client';
import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Snackbar, Box } from '@mui/material';
import './changePassword.css';

const questions = [
    { question: 'What is 3 + 5?', answer: '8' },
    { question: 'What color is the sky?', answer: 'blue' },
    { question: 'What is the capital of France?', answer: 'paris' },
];

const ChangePassword: React.FC = () => {
    const [oldPassword, setOldPassword] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [captchaAnswer, setCaptchaAnswer] = useState<string>('');
    const [captchaQuestion, setCaptchaQuestion] = useState<string>('');
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarMessage, setSnackbarMessage] = useState<string>('');


    const resetCaptcha = () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCaptchaQuestion(questions[randomIndex].question);
    };


    React.useEffect(() => {
        resetCaptcha();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (newPassword !== confirmPassword) {
            setSnackbarMessage('New Password and Confirm Password do not match');
            setSnackbarOpen(true);
            return;
        }


        const correctAnswer = questions.find(q => q.question === captchaQuestion)?.answer;
        if (captchaAnswer.toLowerCase() !== correctAnswer) {
            setSnackbarMessage('Incorrect CAPTCHA answer');
            setSnackbarOpen(true);
            return;
        }


        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);


        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setCaptchaAnswer('');
        resetCaptcha();
        setSnackbarMessage('Password changed successfully');
        setSnackbarOpen(true);
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box className="main">
            <Box maxWidth="sm" className='container' sx={{ boxShadow: 3 }}>
                <Typography variant="h4" gutterBottom>Change Password</Typography>
                <form onSubmit={handleSubmit} className="form">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Old Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                required
                                sx={{ backgroundColor: "black" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="New Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Confirm New Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">{captchaQuestion}</Typography>
                            <TextField
                                label="Your Answer"
                                variant="outlined"
                                fullWidth
                                value={captchaAnswer}
                                onChange={(e) => setCaptchaAnswer(e.target.value)}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Change Password
                            </Button>
                        </Grid>
                        
                    </Grid>
                </form>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackbarClose}
                    message={snackbarMessage}
                    className='snackbar'
                />
            </Box>
        </Box>
    );
};

export default ChangePassword;
