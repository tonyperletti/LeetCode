# Write your MySQL query statement below

SELECT DISTINCT Email
FROM Person
GROUP BY Email
HAVING COUNT(*) > 1;