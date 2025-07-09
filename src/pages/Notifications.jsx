import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Tabs,
  Tab,
  IconButton,
  Button,
  Tooltip,
  Divider,
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import ForumIcon from "@mui/icons-material/Forum";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";

const Notifications = () => {
  const [tab, setTab] = useState("all");
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Comment on Your Post",
      content: "Someone replied to your discussion on burnout recovery.",
      icon: <ForumIcon />,
      time: "2h ago",
      read: false,
    },
    {
      id: 2,
      title: "Story Featured!",
      content: "Your shared journey is now on our homepage!",
      icon: <StarIcon />,
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      title: "Weekly Roundup",
      content: "Check out what you missed this week.",
      icon: <InfoIcon />,
      time: "3 days ago",
      read: true,
    },
  ]);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, read: true }));
    setNotifications(updated);
  };

  const filtered =
    tab === "unread" ? notifications.filter((n) => !n.read) : notifications;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box display="flex" alignItems="center">
          <NotificationsIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
          <Typography variant="h4">Notifications</Typography>
        </Box>
        <Tooltip title="Mark all as read">
          <IconButton onClick={markAllAsRead} color="primary">
            <MarkEmailReadIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 3 }}
      >
        <Tab value="all" label="All" />
        <Tab
          value="unread"
          label={`Unread (${notifications.filter((n) => !n.read).length})`}
        />
      </Tabs>

      {/* List */}
      {filtered.length === 0 ? (
        <Typography variant="body1" sx={{ mt: 3 }} color="text.secondary">
          No notifications to show.
        </Typography>
      ) : (
        <List>
          {filtered.map((notif) => (
            <React.Fragment key={notif.id}>
              <ListItem
                alignItems="flex-start"
                sx={{
                  backgroundColor: notif.read
                    ? "background.paper"
                    : "primary.light",
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: notif.read ? 1 : 3,
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>{notif.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontWeight={notif.read ? 500 : 700}>
                      {notif.title}
                    </Typography>
                  }
                  secondary={
                    <>
                      <Typography variant="body2" color="text.secondary">
                        {notif.content}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {notif.time}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      {/* Call to Action */}
      <Box textAlign="center" mt={6}>
        <Typography variant="h6" gutterBottom>
          Want fewer emails or more updates?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          href="/profile"
          sx={{
            px: 4,
            py: 1.3,
            borderRadius: 50,
            fontSize: "1rem",
          }}
        >
          Manage Notification Settings
        </Button>
      </Box>
    </Container>
  );
};

export default Notifications;
