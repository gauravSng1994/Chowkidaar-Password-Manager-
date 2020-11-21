import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import {DialogTitle,DialogActions,DialogContent} from "./Modal";

const AddPasswordModal = ({open,dialogTitle,handleClose,handleSubmit,data,handlePasswordDataChange}) => {
    // const theme = useTheme();
    // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    {dialogTitle}
                </DialogTitle>
                <DialogContent dividers>
                    <form>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name of website/app"
                            name="name"
                            value={data.name}
                            onChange={(event)=>handlePasswordDataChange(event,"name")}
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(event)=>handlePasswordDataChange(event,"password")}
                            value={data.password}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmPwd"
                            label="Confirm password"
                            name="confirmPwd"
                            autoFocus
                            onChange={(event)=>handlePasswordDataChange(event,"confirmPwd")}
                            value={data.confirmPwd}
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleSubmit}>
                        Save Password
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default AddPasswordModal;
