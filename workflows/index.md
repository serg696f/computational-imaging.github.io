---
title: Attendee workflows
nav_order: 2
has_children: true
permalink: /workflows/
---

## Attendee workflows

One path per kind of participant. Each fact is entered once, in the earliest system that needs it, and reused after that.

| You are | Start here |
|---|---|
| Attending only | [Attendee path](attendee/) |
| Presenting a paper | [Presenter path](presenter/) |
| Organizing a session | [Session organizer path](session-organizer/) |

{% assign c = site.data.cisym %}

## Key facts

- Conference: {{ c.conference.start_date }} to {{ c.conference.end_date }}
- Early fee: ${{ c.registration.early_fee_usd }} through {{ c.registration.early_fee_last_day }}; ${{ c.registration.late_fee_usd }} after
- Registration opens: {{ c.registration.opens }}
- Hotel: {{ c.conference.venue_name }}, ${{ c.hotel.rate_usd_per_night }} per night ({{ c.hotel.rate_note }}), nights of {{ c.hotel.block_nights | join: ", " }}; reserve by {{ c.hotel.cutoff_date }}

## Fields collected once

| Field | Collected in | Reused in |
|---|---|---|
| Full name, email, affiliation, country | CMT (presenters) or registration (everyone else) | Roster, badge, hotel list |
| Role (attendee, presenter, session organizer, session chair) | Registration | Badge colour, roster |
| Paper ID | CMT; typed once at registration | Roster match, program |
| Name as it should appear on the badge | Registration | Badge print file |
| Dietary and accessibility needs | Registration | Catering and venue notes |
| Hotel nights needed (arrival and departure) | Registration | Hotel list |
| ORCID (optional) | CMT | IEEE steps |

Match key between systems: the email address used in CMT must be the one used at registration.
