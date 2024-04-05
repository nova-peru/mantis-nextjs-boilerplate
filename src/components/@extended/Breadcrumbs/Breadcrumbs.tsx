"use client";

import { useEffect, useState } from "react";

// MUI
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import { Grid, Link, Typography } from "@mui/material";

// Local
import { MainCard } from "../../shared/MainCard";
import type { Props } from "./types";

export const Breadcrumbs = ({ navigation, title, ...others }: Props) => {
  // TODO userouter
  const [main, setMain] = useState<any>();
  const [item, setItem] = useState<any>();

  // set active item state
  const getCollapse = (menu: any) => {
    if (menu.children) {
      menu.children.filter((collapse: any) => {
        if (collapse.type && collapse.type === "collapse") {
          getCollapse(collapse);
        } else if (collapse.type && collapse.type === "item") {
          if ("/" === collapse.url) {
            setMain(menu);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  useEffect(() => {
    navigation?.items?.map((menu: any) => {
      if (menu.type && menu.type === "group") {
        getCollapse(menu);
      }
      return false;
    });
  });

  let mainContent;
  let itemContent;
  let breadcrumbContent = <Typography />;
  let itemTitle = "";

  // collapse item
  if (main && main.type === "collapse") {
    mainContent = (
      <Typography
        component={Link}
        to={document.location}
        variant="h6"
        sx={{ textDecoration: "none" }}
        color="textSecondary"
      >
        {main.title}
      </Typography>
    );
  }

  // items
  if (item && item.type === "item") {
    itemTitle = item.title;
    itemContent = (
      <Typography variant="subtitle1" color="textPrimary">
        {itemTitle}
      </Typography>
    );

    // main
    if (item.breadcrumbs !== false) {
      breadcrumbContent = (
        <MainCard
          border={false}
          sx={{ mb: 3, bgcolor: "transparent" }}
          {...(others as any)}
          content={false}
        >
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item>
              <MuiBreadcrumbs aria-label="breadcrumb">
                <Typography
                  component={Link}
                  to="/"
                  color="textSecondary"
                  variant="h6"
                  sx={{ textDecoration: "none" }}
                >
                  Home
                </Typography>
                {mainContent}
                {itemContent}
              </MuiBreadcrumbs>
            </Grid>
            {title && (
              <Grid item sx={{ mt: 2 }}>
                <Typography variant="h5">{item.title}</Typography>
              </Grid>
            )}
          </Grid>
        </MainCard>
      );
    }
  }

  return breadcrumbContent;
};
