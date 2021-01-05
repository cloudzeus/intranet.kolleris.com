import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    container: {},
    formControl: {
        width: '100%',
    },
}));

export default function WarehousePicker({
    handleChange,
    open,
    handleClose,
    handleSubmit,
    warehouse,
}) {
    const classes = useStyles();

    return (
        <div>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Select a warehouse</DialogTitle>
                <DialogContent>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="demo-dialog-native">
                            Warehouse
                        </InputLabel>
                        <Select
                            native
                            value={warehouse}
                            onChange={handleChange}
                            input={<Input id="demo-dialog-native" />}
                        >
                            <option aria-label="None" value="" />
                            <option value={1000}>Main</option>
                            <option value={2000}>Vitrina</option>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
