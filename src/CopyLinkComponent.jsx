import React, { useRef } from 'react';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function CopyLinkComponent({ link }) {
    const linkInputRef = useRef(null)

    const handleCopyClick = () => {
        if (linkInputRef.current) {
            linkInputRef.current.select()
            document.execCommand('copy')
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input
                value={link}
                fullWidth
                inputRef={linkInputRef}
                readOnly
            />
            <IconButton onClick={handleCopyClick} color="primary">
                <ContentCopyIcon />
            </IconButton>
        </div> 
    );
}
