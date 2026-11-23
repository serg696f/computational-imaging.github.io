---
layout: default
title: Attendee path
parent: CISym workflows
nav_order: 1
permalink: /workflows/attendee/
---

## Attendee path

For people attending without a paper or a session role.

{% assign c = site.data.cisym %}

<div class="cisym-diagram" markdown="1">

```mermaid
%%{init: {"theme":"base","themeVariables":{"fontSize":"20px","fontFamily":"Arial, Helvetica, sans-serif"},"flowchart":{"htmlLabels":false,"useMaxWidth":false,"nodeSpacing":50,"rankSpacing":60,"padding":12}}}%%
flowchart TD
  subgraph SITE["Conference site"]
    SITE_sp[" "]
    A1["1. Open the Attend page on the<br/>conference site"]
  end
  subgraph REG["Purdue registration"]
    REG_sp[" "]
    A2["2. Click Register"]
    A3["3. Enter once: name, badge name,<br/>email, affiliation, country, role =<br/>Attendee, dietary needs, accessibility<br/>needs, hotel nights"]
    D1{"4. Registering on or before {{ c.registration.early_fee_last_day }}?"}
    F1["Fee ${{ c.registration.early_fee_usd }}"]
    F2["Fee ${{ c.registration.late_fee_usd }}"]
    A4["5. Pay the fee online"]
    A5["6. Receive confirmation email and<br/>receipt. Save it."]
  end
  subgraph HOTEL["Hotel"]
    HOTEL_sp[" "]
    D2{"7. Need a hotel room?"}
    H1["8. Reserve room: ${{ c.hotel.rate_usd_per_night }} per night plus tax, nights from {{ c.hotel.check_in }}, by {{ c.hotel.cutoff_date }}"]
    H2["Skip"]
  end
  subgraph EVENT["Before and at the event"]
    EVENT_sp[" "]
    A6["9. Read the logistics email: venue,<br/>program, check-in time"]
    D3{"Need to cancel?"}
    C1["Cancel through the registration<br/>confirmation. Refund follows the<br/>cancellation policy."]
    A7["10. Check in at the registration desk<br/>and collect the printed badge"]
  end
  SITE_sp --- A1
  REG_sp --- A2
  HOTEL_sp --- D2
  EVENT_sp --- A6
  A1 --> A2 --> A3 --> D1
  D1 -- Yes --> F1 --> A4
  D1 -- No --> F2 --> A4
  A4 --> A5 --> D2
  D2 -- Yes --> H1 --> A6
  D2 -- No --> H2 --> A6
  A6 --> D3
  D3 -- Yes --> C1
  D3 -- No --> A7
  style SITE fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style REG fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style HOTEL fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  style EVENT fill:#FAFAF8,stroke:#DDD6C8,color:#1B3A6B
  classDef step fill:#EBF0F8,stroke:#1B3A6B,color:#1B3A6B;
  classDef pay fill:#FAFAF8,stroke:#C96A00,color:#1B3A6B;
  classDef gate fill:#FAFAF8,stroke:#007EA8,color:#1B3A6B;
  class A1,A2,A3,A5,A6,A7,H1,H2,C1 step;
  class F1,F2,A4 pay;
  class D1,D2,D3 gate;
  classDef spacer fill:none,stroke:none,color:#FAFAF8;
  linkStyle 0,1,2,3 stroke:none,fill:none;
  class SITE_sp,REG_sp,HOTEL_sp,EVENT_sp spacer;
```

</div>
<script src="{{ '/assets/js/cisym-diagram.js' | relative_url }}"></script>

## What you need and where it goes

| Step | Where | You enter or do | Link |
|---|---|---|---|
| 1 | Conference site | Open the Attend page | [{{ c.links.conference_site }}]({{ c.links.conference_site }}) |
| 2 to 5 | Purdue registration | Name, badge name, email, affiliation, country, role, dietary and accessibility needs, hotel nights; pay | {{ c.links.payment }} |
| 6 | Email | Keep the receipt | |
| 7 to 8 | Hotel | Reserve by {{ c.hotel.cutoff_date }}. Block code: {{ c.hotel.block_code }}. Method: {{ c.hotel.booking_method }} | {{ c.links.hotel_booking }} |
| 9 | Email | Read logistics | |
| 10 | Venue | Show your confirmation; collect your badge | |

## Cancellation policy ({{ c.registration.cancellation.status }})

- {{ c.registration.cancellation.full_refund }}: full refund
- {{ c.registration.cancellation.half_refund }}: 50% refund
- {{ c.registration.cancellation.no_refund }}: no refund
