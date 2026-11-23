---
layout: default
title: Presenter path
parent: Attendee workflows
nav_order: 2
permalink: /workflows/presenter/
---

## Presenter path

For authors of an accepted paper. Your author details are entered once in CMT. At registration you add only your paper ID.

{% assign c = site.data.cisym %}

<style>
.cisym-diagram{overflow-x:auto;background:#FAFAF8;border:1px solid #DDD6C8;border-radius:6px;padding:8px}
.cisym-diagram div.highlighter-rouge,.cisym-diagram div.highlight,.cisym-diagram pre,.cisym-diagram .mermaid,.cisym-diagram code{background:#FAFAF8 !important;box-shadow:none !important;border:0 !important}
.cisym-diagram,.cisym-diagram *{font-family:Arial,Helvetica,sans-serif !important}
.cisym-diagram svg{max-width:none !important;height:auto}
</style>
<div class="cisym-diagram" markdown="1">

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"20px","fontFamily":"Arial, Helvetica, sans-serif"},"flowchart":{"useMaxWidth":false,"nodeSpacing":50,"rankSpacing":60,"padding":12}}}%%
flowchart TD
  subgraph CMT["Microsoft CMT"]
    CMT_sp[" "]
    P1["1. Create or sign in to a CMT account<br/>with the email you will also use to<br/>register"]
    P2["2. Submit paper: title, abstract, authors with affiliation and email, keywords, paper file. Deadline: {{ c.deadlines.paper_submission }}"]
    P3["3. Wait for review. Decision date: {{ c.deadlines.decision_notification }}"]
    D1{"4. Accepted?"}
    P4["Not accepted: process ends. You may<br/>still register as an attendee."]
    P5["5. Note your paper ID"]
  end
  subgraph IEEE["IEEE camera-ready"]
    IEEE_sp[" "]
    P6["6. Prepare the final paper and complete the IEEE copyright step. Deadline: {{ c.deadlines.camera_ready }}"]
  end
  subgraph REG["Purdue registration"]
    REG_sp[" "]
    P7["7. Register: name, badge name, email, affiliation, role = Presenter, paper ID, dietary needs, accessibility needs, hotel nights. Rule: {{ c.registration.presenter_rule }}"]
    D2{"8. Registering on or before {{ c.registration.early_fee_last_day }}?"}
    F1["Fee ${{ c.registration.early_fee_usd }}"]
    F2["Fee ${{ c.registration.late_fee_usd }}"]
    P8["9. Pay and keep the receipt. Deadline: {{ c.deadlines.presenter_registration }}"]
  end
  subgraph HOTEL["Hotel"]
    HOTEL_sp[" "]
    P9["10. Reserve room: ${{ c.hotel.rate_usd_per_night }} per night plus tax, by {{ c.hotel.cutoff_date }}"]
  end
  subgraph EVENT["At the event"]
    EVENT_sp[" "]
    P10["11. Send final slides if asked. Program: {{ c.links.program }}"]
    P11["13. Meet your session chair and the AV<br/>desk, then present"]
    P12["12. Check in and collect the printed badge"]
  end
  CMT_sp --- P1
  IEEE_sp --- P6
  REG_sp --- P7
  HOTEL_sp --- P9
  EVENT_sp --- P10
  P1 --> P2 --> P3 --> D1
  D1 -- No --> P4
  D1 -- Yes --> P5 --> P6 --> P7 --> D2
  D2 -- Yes --> F1 --> P8
  D2 -- No --> F2 --> P8
  P8 --> P9 --> P10 --> P12 --> P11
  style CMT fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style IEEE fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style REG fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style HOTEL fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style EVENT fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  classDef step fill:#EBF0F8,stroke:#1B3A6B,color:#1B3A6B;
  classDef pay fill:#FAFAF8,stroke:#C96A00,color:#1B3A6B;
  classDef gate fill:#FAFAF8,stroke:#007EA8,color:#1B3A6B;
  class P1,P2,P3,P4,P5,P6,P7,P9,P10,P11,P12 step;
  class F1,F2,P8 pay;
  class D1,D2 gate;
  classDef spacer fill:none,stroke:none,color:#FAFAF8;
  linkStyle 0,1,2,3,4 stroke:none,fill:none;
  class CMT_sp,IEEE_sp,REG_sp,HOTEL_sp,EVENT_sp spacer;
```

</div>

## What you need and where it goes

| Step | Where | You enter or do | Link |
|---|---|---|---|
| 1 to 3 | CMT | Account, then title, abstract, authors (name, affiliation, email), keywords, paper file | [CMT]({{ c.links.cmt }}) |
| 5 | CMT | Copy the paper ID | |
| 6 | IEEE | Final paper and copyright form | {{ c.links.ieee_camera_ready }} |
| 7 to 9 | Purdue registration | Same email as CMT, role, paper ID, badge name, needs, hotel nights; pay | {{ c.links.payment }} |
| 10 | Hotel | Reserve by {{ c.hotel.cutoff_date }}. Block code: {{ c.hotel.block_code }} | {{ c.links.hotel_booking }} |
| 11 to 13 | Venue | Slides, session chair, AV check, badge | |

## Open items for organizers

- Presenter registration rules (one registration per paper or per author, and any fee difference) are not decided: `PRESENTER_REGISTRATION_RULE_TBD`.
- All CMT dates and settings above are placeholders until you confirm them in CMT.
