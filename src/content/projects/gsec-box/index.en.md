---
title: Configurable 3D-printable GSEC box
description: A redesign of the GSEC boxes optimised for 3D printing.
slug: gsec-box
date: 2026-06-27
draft: false
category: Space Research
cover: ./cover.png
coverAlt: Configurable GSEC box
---

## About the project

The boxes for our rocket's ground support electronics console (GSEC) needed a redesign to improve 3D-printability and structural integrity.

Because this meant a significant change in geometry, I decided to build the box from scratch and carry over only the functional dimensions. To keep the design efficient, I used a configurable approach - a single base shell onto which the elements specific to each box are attached, letting me simply switch between the individual configurations.

To improve 3D-printability I removed the rounded features along the z axis and replaced them with chamfers of at most 45 degrees.

The structural integrity of the original design was questionable due to thin 2 mm walls and sharp stress concentrators on the thin tabs used to pull the box out. I significantly thickened the walls wherever possible - that is, except where room had to be left for the electronics packed inside. I designed the tabs to blend into the edge of the box and added a fillet to the bottom edge (which prints along the x and y axes).

This, however, created a ventilation problem: the airflow originally ran behind the tab, which was now solid and had no cavity. For the configurations that needed this type of vent, I added an inlet at the bottom of the tabs with 45-degree chamfers, letting the air escape.

<!-- ![Caption](./image.jpg) -->
