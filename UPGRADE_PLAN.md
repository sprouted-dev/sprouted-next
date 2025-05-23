# Sprouted Website Upgrade Plan

## Current State (Updated: 2025-01-23)
- Next.js: 15.1.0 ✅ (App Router)
- Tailwind CSS: 4.0.0-beta.7 ✅
- React: 19.0.0 ✅
- TypeScript: 5.7.2 ✅

## Target State ✅ ACHIEVED
- Next.js: 15.x (latest stable) ✅
- Tailwind CSS: 4.x (using beta) ✅
- React: 19.x (latest stable) ✅
- Our new Sprouted theme system ✅

## Phase 1: Theme Integration (Current Versions)
**Goal**: Get new Weather System content live quickly with existing tech stack

### Step 1: Test Theme Compatibility
- [x] Verify our theme CSS variables work with Tailwind ✅
- [x] Test dark mode functionality ✅
- [x] Ensure sprouted color system integrates properly ✅

### Step 2: Content Migration
- [x] Replace landing page with Weather System content ✅
- [x] Update rotating phrases to Weather-themed ✅
- [x] Add Go module meta tags support ✅
- [x] Add installation and documentation sections ✅
- [x] Preserve existing WordCarousel component (rewritten with React) ✅

### Step 3: Go Module Support
- [x] Add Next.js API routes for Go module redirects ✅
- [x] Configure vercel.json for proper routing ✅
- [x] Test go-get functionality ✅

## Phase 2: Framework Updates (After Launch)
**Goal**: Modernize tech stack for long-term maintainability

### Step 1: Minor Updates (Low Risk)
- [ ] Update Tailwind 3.3.2 → 3.4.x
- [ ] Update React 18.2.0 → 18.3.x
- [ ] Update TypeScript and other dev dependencies

### Step 2: Next.js Update (Higher Risk)
- [ ] Create feature branch for Next.js 15 upgrade
- [ ] Test app router changes and breaking changes
- [ ] Update middleware for Go module routing
- [ ] Full regression testing

## Theme Compatibility Assessment

### Our New Theme Features:
```javascript
// CSS Custom Properties (supported in Tailwind 3.3.2)
:root {
  --color-primary: #82B366;
  --color-weather-sunny: #FFD54F;
  // ...
}

// Component Classes (supported)
.sprouted-btn {
  background-color: var(--color-primary);
  // ...
}
```

### Compatibility Check:
✅ **CSS Variables**: Supported in Tailwind 3.3.2
✅ **Dark Mode Class**: Supported (`darkMode: 'class'`)
✅ **Custom Colors**: Supported in theme.extend.colors
✅ **Component Classes**: Supported via addComponents plugin
✅ **Keyframe Animations**: Supported

## Implementation Strategy

### Approach A: Gradual Migration (Recommended)
1. **Phase 1**: Use current versions, integrate our theme
2. **Deploy and launch**: Get Weather System live quickly
3. **Phase 2**: Upgrade tech stack incrementally
4. **Benefits**: Lower risk, faster time to market

### Approach B: Full Upgrade First
1. **Upgrade everything**: Update to latest versions first
2. **Then migrate content**: Add Weather System content
3. **Benefits**: Modern tech stack from start
4. **Risks**: More complex, potential breaking changes

## Recommended Timeline

### Week 1: Theme Integration (Current Versions)
- Day 1-2: Test theme compatibility, fix any issues
- Day 3-4: Migrate content to Weather System design
- Day 5: Add Go module support and test thoroughly

### Week 2: Launch Preparation
- Day 1-2: Final testing, polish, optimization
- Day 3: Deploy to staging, full testing
- Day 4-5: Production deployment, monitor

### Week 3-4: Post-Launch Upgrades (Optional)
- Incremental framework updates
- Performance optimizations
- Additional features based on user feedback

## Risk Mitigation

### Theme Compatibility Risks
- **Risk**: CSS variables not working properly
- **Mitigation**: Test thoroughly, have fallback colors

### Next.js App Router Risks
- **Risk**: Routing changes in newer versions
- **Mitigation**: Keep current version for launch, upgrade later

### Deployment Risks
- **Risk**: Vercel deployment issues with new routes
- **Mitigation**: Test staging deployment extensively

## Testing Checklist

### Theme Testing
- [ ] Light/dark mode switching
- [ ] All color variables render correctly
- [ ] Component classes work as expected
- [ ] Weather condition badges display properly
- [ ] Responsive design works on all screen sizes

### Functionality Testing
- [ ] Word carousel animation works
- [ ] Go module redirects work (`/weather?go-get=1`)
- [ ] Installation script serves correctly
- [ ] All links and navigation work
- [ ] Email signup form works (if implemented)

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

## Success Criteria

### Phase 1 Success
- [ ] Website loads and functions correctly
- [ ] Weather System content displays beautifully
- [ ] Go module redirects work properly
- [ ] Installation flow works end-to-end
- [ ] Performance is acceptable (< 3s load time)

### Phase 2 Success
- [ ] All frameworks updated to latest stable versions
- [ ] No functionality regressions
- [ ] Improved performance metrics
- [ ] Better developer experience for future updates

This plan balances speed to market with technical debt management, ensuring we can launch quickly while maintaining a path to modern infrastructure.