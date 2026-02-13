## Responsive Design Guardrails

Use this decision rubric for every layout or spacing change:

1. **Mobile-first (phones, up to 640px)**
   - Design for the smallest screen first.
   - Ensure no overlaps, readable type, and clear tap targets.
   - If elements must stack, do it here.

2. **Tablet range (641px–1024px)**
   - Re-check for overlaps introduced by more horizontal space.
   - Add spacing or reposition elements to keep hierarchy clear.
   - Treat this as its own layout, not just “scaled mobile.”

3. **Desktop (1025px and up)**
   - Optimize for visual balance and breathing room.
   - Use larger imagery and stronger layout structure.
   - Preserve the mobile/tablet clarity without reintroducing collisions.

### Execution Checklist
- Verify layout at 3 breakpoints: `<=640px`, `641–1024px`, `>=1025px`.
- If content overlaps at any breakpoint, adjust spacing or positioning for that specific range.
- Prefer small, targeted media-query fixes over global changes.

This guardrail is required for new UI changes and should be applied to hero sections, CTAs, and key content blocks first.

## Product Simplicity Principle

We must design and build with a "less is more" mindset:
- Favor simplicity and minimalism over visual complexity.
- Avoid adding unnecessary UI elements or styling flourishes.
- Continuously refactor to reduce clutter and simplify the user experience.
- Re-imagine elements when needed to make interactions clearer and calmer.
