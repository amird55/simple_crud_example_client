import {Box, Button, Paper, Typography} from "@mui/material";
import React from "react";

function HomePage(){
    return (
        <Paper elevation={3} sx={{ p: 3, maxWidth: 500, margin: '0 auto' }}>
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                הדגמה לתוכנה מלאה
            </Typography>
            <Box sx={{ mb:10,mt:10, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'left', mb: 0 }}>
                    זה קוד שמקביל אל צד שרת מתאים ועושה תוכנה מאד פשוטה עם כמה CRUD בסיסיים
                    <br />
                    המטרה היא בעיקר להראות את מבנה התשתית של תוכנת ריאקט מול שרת
                </Typography>
            </Box>
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
               איך לקרוא
            </Typography>
            <Box sx={{ mb:10,mt:10, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'left', mb: 0 }}>
                    סידרתי את הקומיטים כך שיהיה קצת יותר ברור למה ומה עושים הקבצים וחלקי הקוד
                </Typography>
            </Box>
            <Typography variant="h2" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
                הערות
            </Typography>
            <Box sx={{ mb:10,mt:10, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" sx={{ textAlign: 'left', mb: 0 }}>
                    לא הכנסתי נושא של הגנת סיסמה ואיזורים מוגבלים למשתמש
                    לא התייחסתי לנושא DEPLOY והתאמות למצב של BUILD ופרסום התוכנה בתוך שרת NODE, אלא רק בעבודה של שני שרתים נפרדים ובמקביל
                </Typography>
            </Box>
        </Paper>
    )
}

export default HomePage;
