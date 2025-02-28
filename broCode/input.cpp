#include <iostream>
#include <vector>

using namespace std;

int max_team_power(const vector<int>& powers, int k) {
    int n = powers.size();
    if (k > n) {
        return -1; // Invalid input: team size is larger than the number of players
    }

    int current_sum = 0;
    for (int i = 0; i < k; ++i) {
        current_sum += powers[i];
    }

    int max_sum = current_sum;

    for (int i = k; i < n; ++i) {
        current_sum += powers[i] - powers[i - k];
        max_sum = max(max_sum, current_sum);
    }

    return max_sum;
}

int main() {
    int t;
    cin >> t;

    while (t--) {
        int n, k;
        cin >> n >> k;

        vector<int> powers(n);
        for (int i = 0; i < n; ++i) {
            cin >> powers[i];
        }

        int result = max_team_power(powers, k);
        cout << result << endl;
    }

    return 0;
}