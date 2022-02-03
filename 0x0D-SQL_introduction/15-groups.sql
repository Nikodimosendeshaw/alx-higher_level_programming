-- 15-groups
SELECT score, COUNT(score) as number FROM second_table GROUP BY score HAVING number DESC;
