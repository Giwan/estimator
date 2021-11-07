<script>
    import { highestEstimation, averageEstimation, recommendedEstimation } from "../stores/store.js";
</script>

<div>
    <!-- estimations: {$estimations["complexity"]} -->
    High: {$highestEstimation}
    Avg: {$averageEstimation}
    R: {$recommendedEstimation}
</div>