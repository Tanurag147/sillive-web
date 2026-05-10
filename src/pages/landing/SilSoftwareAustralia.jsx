import SEO from '../../components/SEO'
import LandingHero from '../../components/sections/LandingHero'
import LandingPSPCTA from '../../components/sections/LandingPSPCTA'

export default function SilSoftwareAustralia() {
  return (
    <>
      <SEO
        title="SIL Management Software Built for Australian Providers"
        description="Purpose-built SIL software for NDIS providers in Australia. Manage shifts, clinical implementation, audit evidence, and coordinator visibility in one platform. Built inside Caring Hands SA in Adelaide."
        path="/sil-software-australia"
        keywords="SIL software Australia, NDIS SIL management software, supported independent living software, SIL provider platform"
      />

      <LandingHero
        eyebrow="SIL software · Australia"
        h1="SIL Management Software Built for Australian Providers"
        sub="Most NDIS-adjacent software was built for billing or rostering. SILLIVE is the operations platform built for SIL — by an SA-based operator running a real home."
        source="sil-software-australia"
      />

      <LandingPSPCTA
        problem={{
          title: "Australian SIL providers are running on tools that weren't built for them.",
          body: [
            "Most platforms in market were designed for in-home aged care, NDIS billing, or generic disability services. SIL is different — long shifts, multi-participant homes, behaviour support plans, and audit requirements that punish back-filled documentation.",
            "When the tool isn't built for the operation, the operation works around the tool. That's how clinical recommendations end up in folders nobody opens, and audit prep becomes weekend overtime.",
          ],
        }}
        solution={{
          title: "Operations software designed for the SIL home itself.",
          points: [
            "Multi-home dashboard for directors who run 2 to 20 homes.",
            "Worker mobile app with shift briefings — what the participant needs today, before the shift starts.",
            "Clinical recommendations from BSPs and OT plans automatically routed into shift briefings.",
            "Audit evidence trail builds passively — every action linked to its source document.",
            "Coordinator portal so support coordinators see implementation in real time.",
            "Australian-region data hosting. No participant data sent to third-party AI APIs.",
          ],
        }}
        proof={{
          quote: "We don't ship features that haven't survived a Tuesday morning at Caring Hands SA.",
          cite: "Tanurag Gautam · Director, Caring Hands SA · Founder, SILLIVE",
        }}
      />
    </>
  )
}
