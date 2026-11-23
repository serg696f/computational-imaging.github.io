---
layout: default
title: Session organizer path
parent: Attendee workflows
nav_order: 3
permalink: /workflows/session-organizer/
---

## Session organizer path

For people who propose and chair a session. This is a recommended flow. How sessions are proposed and approved is not yet decided, so those steps use placeholders.

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
  subgraph PROP["Proposal"]
    PROP_sp[" "]
    S1["1. Send a session proposal via {{ c.links.session_proposal }} by {{ c.deadlines.session_proposal }}: session title, 100-word description, organizer name, email, affiliation, proposed speakers"]
    D1{"2. Approved by the program chairs?"}
    S2["Not approved: chairs reply with<br/>reasons. You may revise or register as<br/>an attendee."]
  end
  subgraph SPEAK["Speakers"]
    SPEAK_sp[" "]
    S3["3. Invite speakers. Give each the<br/>session name, the CMT link and the<br/>paper deadline"]
    S4["4. Each speaker submits in CMT and<br/>selects your session. Process:<br/>CMT_SESSION_SETTING_TBD"]
    S5["5. Collect final speaker list: name,<br/>email, talk title, order"]
  end
  subgraph REG["Purdue registration"]
    REG_sp[" "]
    S6["6. Register: name, badge name, email,<br/>affiliation, role = Session organizer,<br/>dietary needs, accessibility needs,<br/>hotel nights"]
    S7["7. Pay ${{ c.registration.early_fee_usd }} by {{ c.registration.early_fee_last_day }}, or ${{ c.registration.late_fee_usd }} after"]
  end
  subgraph HOTEL["Hotel"]
    HOTEL_sp[" "]
    S8["8. Reserve room: ${{ c.hotel.rate_usd_per_night }} per night plus tax, by {{ c.hotel.cutoff_date }}"]
  end
  subgraph EVENT["Before and at the event"]
    EVENT_sp[" "]
    S9["9. Review the session chair guide and<br/>confirm the running order with the<br/>program chairs"]
    S10["10. Check in and collect the printed badge"]
    S11["11. Chair the session"]
  end
  PROP_sp --- S1
  SPEAK_sp --- S3
  REG_sp --- S6
  HOTEL_sp --- S8
  EVENT_sp --- S9
  S1 --> D1
  D1 -- No --> S2
  D1 -- Yes --> S3 --> S4 --> S5 --> S6 --> S7 --> S8 --> S9 --> S10 --> S11
  style PROP fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style SPEAK fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style REG fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style HOTEL fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style EVENT fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  classDef step fill:#EBF0F8,stroke:#1B3A6B,color:#1B3A6B;
  classDef pay fill:#FAFAF8,stroke:#C96A00,color:#1B3A6B;
  classDef gate fill:#FAFAF8,stroke:#007EA8,color:#1B3A6B;
  class S1,S2,S3,S4,S5,S6,S8,S9,S10,S11 step;
  class S7 pay;
  class D1 gate;
  classDef spacer fill:none,stroke:none,color:#FAFAF8;
  linkStyle 0,1,2,3,4 stroke:none,fill:none;
  class PROP_sp,SPEAK_sp,REG_sp,HOTEL_sp,EVENT_sp spacer;
```

</div>

## What you need and where it goes

| Step | Where | You enter or do |
|---|---|---|
| 1 to 2 | {{ c.links.session_proposal }} | Title, description, organizer details, proposed speakers |
| 3 to 5 | CMT and email | Speaker list; speakers submit in CMT ([CMT]({{ c.links.cmt }})) |
| 6 to 7 | Purdue registration | Same details as the attendee path, role = Session organizer; {{ c.links.payment }} |
| 8 | Hotel | Reserve by {{ c.hotel.cutoff_date }}. Block code: {{ c.hotel.block_code }} |
| 9 to 11 | Venue | See the [session chair guide](../../chairs/session-chairs/) |

## Open items for organizers

- Whether session organizers pay the standard fee: not decided.
- Whether CMT has a role or track for sessions: unverified. Do not rely on step 4 until checked.
